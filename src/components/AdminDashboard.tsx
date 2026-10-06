import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import * as firestore from 'firebase/firestore';
import { LogIn, LogOut, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

interface TastingNote {
  id: string;
  title: string;
  content: string;
  createdAt: any;
}

export function AdminDashboard() {
  const { user, loading, loginWithGoogle, logout } = useAuth();
  const isDarkMode = useAppStore(state => state.isDarkMode);
  
  const [notes, setNotes] = useState<TastingNote[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');

  useEffect(() => {
    if (!user) {
      setNotes([]);
      return;
    }

    const notesRef = firestore.collection(db, 'users', user.uid, 'tastingNotes');
    const q = firestore.query(notesRef, firestore.orderBy('createdAt', 'desc'));
    
    const unsubscribe = firestore.onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TastingNote[];
      setNotes(data);
    });

    return () => unsubscribe();
  }, [user]);

  const handleAdd = async () => {
    if (!user || !formTitle.trim() || !formContent.trim()) return;
    try {
      await firestore.addDoc(firestore.collection(db, 'users', user.uid, 'tastingNotes'), {
        title: formTitle,
        content: formContent,
        createdAt: firestore.serverTimestamp()
      });
      setIsAdding(false);
      setFormTitle('');
      setFormContent('');
    } catch (err) {
      console.error('Error adding note', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user) return;
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await firestore.deleteDoc(firestore.doc(db, 'users', user.uid, 'tastingNotes', id));
    } catch (err) {
      console.error('Error deleting note', err);
    }
  };

  const handleEdit = (note: TastingNote) => {
    setEditingId(note.id);
    setFormTitle(note.title);
    setFormContent(note.content);
  };

  const handleUpdate = async () => {
    if (!user || !editingId || !formTitle.trim() || !formContent.trim()) return;
    try {
      await firestore.updateDoc(firestore.doc(db, 'users', user.uid, 'tastingNotes', editingId), {
        title: formTitle,
        content: formContent,
      });
      setEditingId(null);
      setFormTitle('');
      setFormContent('');
    } catch (err) {
      console.error('Error updating note', err);
    }
  };

  const cancelEdit = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormTitle('');
    setFormContent('');
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <section className={`py-24 px-6 md:px-12 transition-colors duration-300 ${isDarkMode ? 'bg-[#1C2221] text-[#F2F4F3]' : 'bg-[#EAECEB] text-[#1F2625]'}`}>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#A67C52]/30 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Personal <span className="italic font-serif text-[#A67C52]">Archive</span>
            </h2>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              오도행의 향기와 사유를 기록하는 나만의 프라이빗 저장소.
            </p>
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={user.photoURL || ''} alt="profile" className="w-8 h-8 rounded-full border border-[#A67C52]" />
                  <span className="text-sm font-medium">{user.displayName}</span>
                </div>
                <button onClick={logout} className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
                  <LogOut className="w-4 h-4" /> 로그아웃
                </button>
              </div>
            ) : (
              <button 
                onClick={loginWithGoogle}
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white transition-all"
              >
                <LogIn className="w-4 h-4" /> Google 계정으로 로그인
              </button>
            )}
          </div>
        </div>

        {user ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">나의 테이스팅 노트</h3>
              {!isAdding && !editingId && (
                <button 
                  onClick={() => setIsAdding(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#A67C52] text-white rounded-md hover:bg-[#8A6540] transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" /> 새 기록 추가
                </button>
              )}
            </div>

            {(isAdding || editingId) && (
              <div className={`p-6 rounded-xl border ${isDarkMode ? 'bg-[#161B1A] border-gray-800' : 'bg-white border-gray-200'} space-y-4 shadow-sm`}>
                <input 
                  type="text" 
                  placeholder="차 이름 또는 주제를 입력하세요..." 
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-1 transition-all ${
                    isDarkMode ? 'bg-[#1C2221] border-gray-700 focus:border-[#A67C52] focus:ring-[#A67C52] text-white placeholder-gray-500' : 'bg-[#F9FAFB] border-gray-300 focus:border-[#A67C52] focus:ring-[#A67C52] text-gray-900'
                  }`}
                />
                <textarea 
                  placeholder="향, 맛, 그리고 그 순간의 감각을 자유롭게 기록해보세요..." 
                  value={formContent}
                  onChange={e => setFormContent(e.target.value)}
                  rows={5}
                  className={`w-full p-3 rounded-lg border resize-none focus:outline-none focus:ring-1 transition-all ${
                    isDarkMode ? 'bg-[#1C2221] border-gray-700 focus:border-[#A67C52] focus:ring-[#A67C52] text-white placeholder-gray-500' : 'bg-[#F9FAFB] border-gray-300 focus:border-[#A67C52] focus:ring-[#A67C52] text-gray-900'
                  }`}
                />
                <div className="flex justify-end gap-3 pt-2">
                  <button onClick={cancelEdit} className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>
                    <X className="w-4 h-4" /> 취소
                  </button>
                  <button onClick={editingId ? handleUpdate : handleAdd} className="flex items-center gap-1 px-4 py-2 rounded-md bg-[#A67C52] text-white hover:bg-[#8A6540] text-sm">
                    <Check className="w-4 h-4" /> {editingId ? '수정 완료' : '저장하기'}
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notes.length === 0 && !isAdding ? (
                <div className={`col-span-1 md:col-span-2 p-12 text-center rounded-xl border border-dashed ${isDarkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'}`}>
                  아직 기록된 테이스팅 노트가 없습니다. <br />
                  첫 번째 기록을 남겨보세요.
                </div>
              ) : (
                notes.map(note => (
                  <div key={note.id} className={`p-6 rounded-xl border group transition-all hover:shadow-md ${isDarkMode ? 'bg-[#161B1A] border-gray-800 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-medium">{note.title}</h4>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEdit(note)} className="p-1.5 text-gray-400 hover:text-[#A67C52] rounded-md transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(note.id)} className="p-1.5 text-gray-400 hover:text-red-500 rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <p className={`whitespace-pre-wrap text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{note.content}</p>
                    {note.createdAt && (
                      <div className={`mt-6 text-xs text-right ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                        {new Date(note.createdAt.seconds * 1000).toLocaleDateString('ko-KR')}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className={`p-12 text-center rounded-xl border ${isDarkMode ? 'bg-[#161B1A] border-gray-800' : 'bg-white border-gray-200'}`}>
            <LogIn className="w-12 h-12 mx-auto text-[#A67C52] mb-4 opacity-50" />
            <h3 className="text-xl font-medium mb-2">로그인이 필요합니다</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Google 계정으로 로그인하시면, 나의 테이스팅 노트를 작성하고 안전하게 보관할 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
