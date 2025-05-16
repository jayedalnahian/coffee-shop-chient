import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {




    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const deleteAnUser = (user) => {
        return deleteUser(user)
    }







    const userInfo = {
        createUser,
        deleteAnUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;