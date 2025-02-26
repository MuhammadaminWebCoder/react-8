import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tooltip } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getToken from '../hooks/getToken'
import { Logo } from '../assets/icons/Logo'

const Header = () => {
  const {setToken,setHideMenu,hideMenu} = getToken()
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [logOut,setLogOut] = useState(false)
  function handleLogOut() {
    setIsLoading(true)
    setTimeout(() => {
      localStorage.clear()
      navigate('/')
      setToken(null)
      setIsLoading(false)
    }, 1000);
  }
  return (
    <div className='flex justify-between bg-[#01152a]'>
      <div className={`${hideMenu ?'w-[80px]':'w-[250px]'} duration-300 w-[20%] main-color flex items-center gap-5 p-4`}>
          <Logo/>
          <span className={`text-white text-[20px] ${hideMenu && 'hidden opacity-0'}`} >Administratsiya</span>
      </div>
      <div className={`${hideMenu ? 'w-full' : 'flex-1'} text-white flex items-center justify-between px-[10px]`}>
      <div className='text-3xl' onClick={() => setHideMenu(!hideMenu)}>{hideMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>
        <div className="flex gap-5">
            <Tooltip placement='bottom' title={"Oxirgi malumot yengilangan vaqt : 30 yan , 2025 19:12"}>
                  <Button size='middle' icon={<InfoCircleOutlined/>} iconPosition='left' type='default'>Sinxronlash</Button>
            </Tooltip>
            <Badge count={9} color='red' size='default'>
                  <Button size='middle' icon={<BellOutlined/>} iconPosition='left' type='default'></Button>
            </Badge>
            <button onClick={() => setLogOut(true)} className='flex items-center gap-2 cursor-pointer'>
              <span>Chiqish</span>
              <LogoutOutlined/>
            </button>
        </div>
      </div>
      <Modal confirmLoading={isLoading} open={logOut} onCancel={() => setLogOut(false)}  onOk={handleLogOut} title="Chiqish">
        <p className='text-[16px]'>Siz aniq chiqmoqchimsz ?</p>
      </Modal>
    </div>
  )
}

export default Header
