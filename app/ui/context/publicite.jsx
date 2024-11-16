"use client";
import React, { useEffect, useState, createContext } from 'react';
import jwt from 'jsonwebtoken';

const PubliciteContext = createContext();

function PubliciteProvider({ children }) {
    const [session, setSession] = useState('unlogged'); // Initialise avec 'unlogged'

    useEffect(() => {
        const decodeJWT = (token) => {
            try {
                if (token) {
                    const decoded = jwt.decode(token);
                    setSession(decoded);
                } else {
                    setSession('unlogged');
                }
            } catch (error) {
                console.error('Error decoding JWT:', error);
                setSession('unlogged');
            }
        };

        // Vérifiez si le code s'exécute dans le navigateur
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('formdata');
            decodeJWT(token);
        }
    }, []); // L'effet ne dépend que de l'initialisation

    return (
        <PubliciteContext.Provider value={{ session }}>
            {children}
        </PubliciteContext.Provider>
    );
}

export { PubliciteProvider, PubliciteContext };