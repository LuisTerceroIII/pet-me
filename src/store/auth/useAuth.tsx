
export const useAuth = (set,get) => ({
    isLogin: false,
    user: null,
    authToken: null,
    email: "",
    password: "",
    setEmail : (e) => { set((state) => ({
        email: state.email = e?.target?.value
    }))
    },
    setPassword : (e) => {
        set((state) => ({
            password: state.password = e?.target?.value
        }))
    }
}) 