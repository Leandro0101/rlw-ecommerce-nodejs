import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes'
import { AuthProvider } from './Context/AuthContext'

import Menu from './Components/Menu'

function App() {
  return (
    <AuthProvider>
      <Menu>
        <Routes />
      </Menu>
    </AuthProvider>
  )
}

export default App
