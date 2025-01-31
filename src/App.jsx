import React from 'react'
import './App.css'
import PageRoutes from './routers/Dashboard'
import Login from './pages/Login/Login'
import getToken from './hooks/getToken'

function App() {
    const {token} = getToken()
    
    if (token) {
      return <PageRoutes/>
    }
    else{
      return <Login/>
    }
}

export default App
