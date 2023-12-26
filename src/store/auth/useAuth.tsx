import { create } from 'zustand';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js"
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
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void
  registerUserProfileInfo: (userId: string) => Promise<void>
  setPetitionState: (petitionState: PetitionState) => void
  signUpWithEmail: () => Promise<void>
  registerSubmitButtonIsEnabled: () => boolean
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
    }))
  },
  setPassword: (e) => {
    set((state) => ({
      password: e?.target?.value,
    }))
  },
  setName: (e) => {
    set((state) => ({
      name: e?.target?.value,
    }))
  },
  setUsername: (e) => {
    set((state) => ({
      username: e?.target?.value,
    }))
  },
  registerUserProfileInfo: async (userId) => {
    try {
      const { error } = await supabase
        .from("UserProfiles")
        .insert([
          { id: userId, name: get()?.name || null, username: get()?.username || null }
        ])
        .select()
        get()?.setPetitionState(PetitionState.SUCCESS)
      if (error) throw new Error("error saving user profile info" + error)
    } catch (e) {
      console.log("error saving user profile info", JSON.stringify(e))
      get()?.setPetitionState(PetitionState.ERROR)
    }
  },
  setPetitionState: (petitionState: PetitionState) => {
    set((state) => ({
      petitionState
    }))
  },
  signUpWithEmail: async () => {
    try {
      get()?.setPetitionState(PetitionState.LOADING)

      const { data, error } = await supabase.auth.signUp({
        email: get()?.email,
        password: get()?.password,
        options: {
          emailRedirectTo: `/`
        },
      })
      if (error) throw new Error("error signing up " + error)

      //@ts-ignore
      await get()?.registerUserProfileInfo(data?.user?.id)

    } catch (e) {
      console.log("error signing up", JSON.stringify(e))
      get()?.setPetitionState(PetitionState.ERROR)
    }
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