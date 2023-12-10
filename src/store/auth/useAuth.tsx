
export const useAuth = (set,get) => ({
    isLogin: false,
    user: null,
    authToken: null,
    login: () => {
        set((state) => { state.isLogin = true} )
    }
}) 