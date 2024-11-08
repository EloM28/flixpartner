"use client"

import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

const SessionContext = React.createContext();

function SessionProvider(props) {
  const [session, setSession] = useState()
  const [forceUpdate, setForceUpdate] = useState(false)
  
  async function decodeJWT(token) {
      try {
        if(token){
          const decoded = jwt.decode(token);
          return setSession(decoded);
        }else{
        return setSession('unlogged');
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);
        return setSession('unlogged');
      }
    }
  const handleLogin = (token) => {
    decodeJWT(token);
    localStorage.setItem('token', token);
    setForceUpdate((prev) => !prev); // Force une mise à jour
  };

  useEffect(() => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
      decodeJWT(token);
  }
}, [typeof window !== 'undefined' && localStorage.getItem('token'), forceUpdate]);

  return (
    <SessionContext.Provider
      value={{
        session,
        login: handleLogin
      }}>
      {props.children}
    </SessionContext.Provider>
  );
}

export { SessionProvider, SessionContext };