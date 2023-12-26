/* import { create } from 'zustand';
import { useUser, UserState } from '@/store/actors/useUser';
import { useAuth, AuthState } from '@/store/auth/useAuth';

interface CombinedState extends UserState, AuthState {}

export const useStore = create<CombinedState>((set , get, api) => ({
  ...useUser(set, get, api),
  ...useAuth(set, get, api)
}));
 */