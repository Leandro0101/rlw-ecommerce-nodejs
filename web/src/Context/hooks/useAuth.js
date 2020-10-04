import React from 'react';

function useAuth() {
  function handleLogin(values) {
    console.log(values);
  }

  function handleRegister(values) {
    console.log(values);
  }

  return {handleLogin, handleRegister};
}

export default useAuth;