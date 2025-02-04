import { useContext } from 'react'
import {Context} from '../context/Context'

const getContext = () => {
  const {token,setToken,hideMenu,setHideMenu} = useContext(Context)
  return {token,setToken,hideMenu,setHideMenu}
}

export default getContext
