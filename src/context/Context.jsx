import React from 'react'
import { children , createContext, useState } from "react";
export const Context = createContext()

export const AdminContext = ({children}) => {
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [hideMenu, setHideMenu] = useState(false);

    localStorage.setItem("token",JSON.stringify(token))
    return(
        <Context.Provider value={{token,setToken,hideMenu,setHideMenu}}>
            {children}
        </Context.Provider>
    )
}