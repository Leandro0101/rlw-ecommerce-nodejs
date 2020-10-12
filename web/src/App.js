import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
