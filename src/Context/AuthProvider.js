import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [user])

    const contextData = {createUser, updateUser, user, login, logout, loading};
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;