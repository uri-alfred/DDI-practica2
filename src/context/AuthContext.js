import React, { useState, useEffect, createContext } from "react";
import { storageController } from "../api/token";
import { userController } from "../api/users";


export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;

    useEffect(() => {
        getSession();
    }, [])

    const getSession = async () => {
        const token = await storageController.getToken();
        console.log("Token --> ", token)
    }

    const login = async (token) => {
        try {
            console.log('Obteniendo', token);
            await storageController.setToken(token);
            const resPerfil = await userController.getMe(token);
            console.log('Me', resPerfil);
        } catch (error) {
            console.log(error)
        }
    }


    const data = {
        user: null,
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('update user')
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}