import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [state, changeState] = useState({
        wasChecked: false,
        user: null,
        listener: null
    })

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        if (state.listener == null) {
            changeState({
                ...state, 
                listener: auth.onAuthStateChanged((user) => {
                    changeState(oldState => ({
                        ...oldState,
                        wasChecked: true,
                        user: user ? user : null
                    }))
                })
            })
        }

        return () => {
            if (state.listener)
                state.listener()
        }
    }, [])

    const { user, wasChecked } = state
    const value = {
        wasChecked,
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}