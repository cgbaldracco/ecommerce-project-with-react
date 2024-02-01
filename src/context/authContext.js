import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(null);

    const signUp = async (email, contraseña) => await createUserWithEmailAndPassword(auth, email, contraseña);

    const login = async (email, contraseña) => await signInWithEmailAndPassword(auth, email, contraseña);

    const logout = () => signOut(auth);

    const resetPassword = async (email) => await sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, []);

    return <authContext.Provider value={{signUp, login, user, logout, resetPassword}}>{ children }</authContext.Provider>;
}