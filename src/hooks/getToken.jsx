import React from 'react'
import { useContext } from 'react'
import {Context} from '../context/Context'

const getToken = () => {
  const {token,setToken} = useContext(Context)
  return {token,setToken}
}

export default getToken
