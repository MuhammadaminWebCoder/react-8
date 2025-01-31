import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PATH from '../../hooks/usePath'
import Login from '../../pages/Login/Login'

const Login = () => {
  return (
    <Routes>
      <Route path={PATH.Login} element={<Login/>} />
    </Routes>
  )
}

export default Login
