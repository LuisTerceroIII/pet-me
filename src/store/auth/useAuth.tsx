import { create } from 'zustand';
import { User } from "@supabase/supabase-js"
import { PetitionState } from '@/types/index';

export interface AuthState {
    isLogin: boolean
    user: any // You might want to replace 'any' with the actual type of your user object
    authToken: string | null
    username: string
    name: string
    email: string
    password: string
    petitionState: PetitionState
    //forms errors
    nameError: boolean
    emailError: boolean
    usernameError: boolean
    passwordError: boolean
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    setName: (e: React.ChangeEvent<HTMLInputElement>) => void
    setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void
    setPetitionState: (petitionState: PetitionState) => void
    registerSubmitButtonIsEnabled: () => boolean
    loginSubmitButtonIsEnable: () => boolean
    cleanRegisterForm: () => void
    setUser: (user: User) => void
    isLogged: () => boolean
}


export const useAuth = create<AuthState>((set, get, api) => ({
    isLogin: false,
    user: null,
    authToken: null,
    username: "",
    name: "",
    email: "",
    password: "",
    authIsLoading: false,
    petitionState: PetitionState.IDLE,
    nameError: false,
    emailError: false,
    usernameError: false,
    passwordError: false,
    isLogged: () => {
      return get()?.user?.role === "authenticated"
    },
    loginSubmitButtonIsEnable: () => {
      return (
        get().email.length > 0 &&
        get().password.length > 0
      )
    },
    registerSubmitButtonIsEnabled: () => {
      return (
        get().username.length > 0 &&
        get().name.length > 0 &&
        get().email.length > 0 &&
        get().password.length > 0
      )
    },
    setEmail: (e) => {
      set((state) => ({
        ...state,
        email: e?.target?.value,
        emailError: e?.target?.value.length === 0
      }))
    },
    setPassword: (e) => {
      set((state) => ({
        password: e?.target?.value,
        passwordError: e?.target?.value.length === 0
      }))
    },
    setName: (e) => {
      set((state) => ({
        name: e?.target?.value,
        nameError: e?.target?.value.length === 0
      }))
    },
    setUsername: (e) => {
      set((state) => ({
        username: e?.target?.value,
        usernameError: e?.target?.value.length === 0
      }))
    },
    setPetitionState: (petitionState: PetitionState) => {
      set((state) => ({
        petitionState
      }))
    },
    cleanRegisterForm: () => {
      set((state) => ({
        email: "",
        password: "",
        name: "",
        username: "",
        petitionState: PetitionState.IDLE,
      }))
    },
    setUser: (user: User) => {
      set((state) => ({
        user: user
      }))
    }
})
)