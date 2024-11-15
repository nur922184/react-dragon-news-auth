import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Fairbase/Fairbase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null)
    console.log(user)

    const crateNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const Logout=()=>{
        alert('LogOut Successfully')
        return signOut(auth)
    }
    const Login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe;
        }
    }, [])

    const AutInfo = {
        user,
        setUser,
        crateNewUser, 
        Logout,
        Login
    }

    return (
        <AuthContext.Provider value={AutInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;