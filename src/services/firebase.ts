import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import { SpaceInquiry } from '../types';
import { escapeHtml } from '../store/appStore';

// Environment variables or fallback mock config
const firebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || '',
  authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || ''
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let isFirebaseReady = false;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.apiKey !== 'MY_FIREBASE_API_KEY') {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    db = getFirestore(app);
    isFirebaseReady = true;
    console.log('[Firebase] Firestore initialized successfully.');
  } else {
    console.info('[Firebase] Config not provided; using LocalStorage Mock DB fallback seamlessly.');
  }
} catch (err) {
  console.warn('[Firebase] Initialization error, falling back to LocalStorage Mock DB:', err);
  isFirebaseReady = false;
}

const LOCAL_STORAGE_INQUIRIES = 'odohaeng_space_inquiries';

/**
 * Teahouse Reservation & Inquiry submission:
 * 1) Escapes all user inputs to block XSS
 * 2) Adds document to 'space_inquiries' collection in Firestore with serverTimestamp
 * 3) If Firebase is offline/unconfigured, saves to LocalStorage Mock DB
 */
export async function submitSpaceInquiry(inquiry: SpaceInquiry): Promise<{ success: boolean; id: string; isFallback: boolean }> {
  // Sanitize all textual inputs
  const sanitized: SpaceInquiry = {
    type: inquiry.type || 'reservation',
    name: escapeHtml(inquiry.name),
    contact: escapeHtml(inquiry.contact),
    email: escapeHtml(inquiry.email || ''),
    date: escapeHtml(inquiry.date || ''),
    sessionTime: escapeHtml(inquiry.sessionTime || ''),
    guests: escapeHtml(inquiry.guests || ''),
    preference: escapeHtml(inquiry.preference || ''),
    spaceType: escapeHtml(inquiry.spaceType || ''),
    message: escapeHtml(inquiry.message || ''),
    createdAt: Date.now()
  };

  const generatedId = 'inq-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);

  // LocalStorage Mock DB save (Always record for reliability)
  try {
    const existing = localStorage.getItem(LOCAL_STORAGE_INQUIRIES);
    const list: SpaceInquiry[] = existing ? JSON.parse(existing) : [];
    list.unshift({ ...sanitized, id: generatedId });
    localStorage.setItem(LOCAL_STORAGE_INQUIRIES, JSON.stringify(list));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  if (isFirebaseReady && db) {
    try {
      const colRef = collection(db, 'space_inquiries');
      const docRef = await addDoc(colRef, {
        ...sanitized,
        createdAt: serverTimestamp()
      });
      return { success: true, id: docRef.id, isFallback: false };
    } catch (err) {
      console.warn('[Firestore] Cloud submission failed, gracefully preserved in local DB:', err);
      return { success: true, id: generatedId, isFallback: true };
    }
  }

  return { success: true, id: generatedId, isFallback: true };
}

export function getLocalInquiries(): SpaceInquiry[] {
  try {
    const existing = localStorage.getItem(LOCAL_STORAGE_INQUIRIES);
    return existing ? JSON.parse(existing) : [];
  } catch {
    return [];
  }
}
