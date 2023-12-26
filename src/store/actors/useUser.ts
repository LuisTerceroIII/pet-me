import { StateCreator } from "zustand"

export interface UserState {
  username: string | null
  name: string | null
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useUser: StateCreator<UserState> = (set, get, api) => ({
  username: null,
  name: null,
  setName: (e) => {
    set((state) => ({
      name: state.name = e?.target?.value,
    }))
  },
  setUsername: (e) => {
    set((state) => ({
      username: state.username = e?.target?.value,
    }))
  }

})
