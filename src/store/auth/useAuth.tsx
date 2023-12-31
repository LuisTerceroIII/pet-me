import { create } from 'zustand';
import { createClient, SupabaseClient, AuthResponse } from "@supabase/supabase-js"
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
  signInWithEmail: () => Promise<void>
  signUpWithEmail: () => Promise<void>
  registerSubmitButtonIsEnabled: () => boolean
  loginSubmitButtonIsEnable: () => boolean
  cleanRegisterForm: () => void
}

const supabase: SupabaseClient = createClient(
  //@ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

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
  signUpWithEmail: async () => {
    try {

      get()?.setPetitionState(PetitionState.LOADING)

      const { error } = await supabase.auth.signUp({
        email: get()?.email,
        password: get()?.password,
        options: {
          emailRedirectTo: `/`,
          data: {
            name: get()?.name || null, 
            username: get()?.username || null
          }
        },
      })

      if (error) throw new Error("error signing up " + error)

      get()?.setPetitionState(PetitionState.SUCCESS)

    } catch (e) {
      console.log("error signing up", JSON.stringify(e))
      get()?.setPetitionState(PetitionState.ERROR)
    }
  },
  signInWithEmail: async () => {
    get()?.setPetitionState(PetitionState.LOADING)
    const { data, error } : AuthResponse = await supabase.auth.signInWithPassword({
      email: get()?.email,
      password: get()?.password
    })
    if(error) {
      get()?.setPetitionState(PetitionState.ERROR)
    } else {
      set((state) => ({
        user: data?.user
      }))
      get()?.setPetitionState(PetitionState.SUCCESS)
    }
  },
  signOut: async () => {
    await supabase.auth.signOut()
  },
  cleanRegisterForm: () => {
    set((state) => ({
      email: "",
      password: "",
      name: "",
      username: "",
      petitionState: PetitionState.IDLE,
    }))
  }
})
)