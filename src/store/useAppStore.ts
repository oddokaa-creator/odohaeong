import { useSyncExternalStore } from 'react';
import { appStore } from './appStore';
import { AppState } from '../types';

export function useAppStore<T = AppState>(selector?: (state: AppState) => T): T {
  const getSnapshot = () => {
    const fullState = appStore.getState();
    return selector ? selector(fullState) : (fullState as unknown as T);
  };

  return useSyncExternalStore(
    listener => appStore.subscribe(listener),
    getSnapshot,
    getSnapshot
  );
}
