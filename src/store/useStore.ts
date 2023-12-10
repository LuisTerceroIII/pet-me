import { create } from 'zustand'
import { useUser } from '@/store/actors/useUser'
import { useAuth } from '@/store/auth/useAuth'


export const useStore = create((...a) => ({
  ...useUser(...a),
  ...useAuth(...a)
}))
