import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
const Context = createContext();

function AuthProvider({ children }) {
  const { handleLogin, handleRegister } = useAuth();

  return(
    <Context.Provider value={{handleLogin, handleRegister}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };