import React, {useState, createContext, useEffect} from 'react';
import firebase from 'firebase';
export const AuthProvider= createContext();

export const authprovider = ({children}) => {
    const [currentUser, setCurrentUser] =useState([]);

    useEffect(()=>{firebase.auth().onAuthStateChanged((user)=>{
        setCurrentUser(user);
    });}, []);
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>);
};
