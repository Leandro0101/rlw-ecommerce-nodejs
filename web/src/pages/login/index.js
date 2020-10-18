import React, { useState } from 'react'
import * as Styled from './styles'

import Header from '../../Components/Header'
import Register from './Components/Register'
import SignIn from './Components/SignIn'

function Login() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {/* <Header title="Minha conta" /> */}

      <Styled.LoginContainer>
        <Styled.Login>
          <Styled.Buttons>
            <Styled.Button onClick={() => setShowLogin(true)}>
              Cadastro
            </Styled.Button>
            <Styled.Button onClick={() => setShowLogin(false)}>
              Login
            </Styled.Button>
          </Styled.Buttons>
          <Styled.Content>
            {showLogin ? <Register /> : <SignIn />}
          </Styled.Content>
        </Styled.Login>
      </Styled.LoginContainer>
    </>
  )
}

export default Login
