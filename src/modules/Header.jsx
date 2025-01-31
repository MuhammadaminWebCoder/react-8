import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tooltip } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getToken from '../hooks/getToken'
import { Logo } from '../assets/icons/Logo'

const Header = () => {

  const {setToken} = getToken()
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
      <div className="w-[22%] main-color flex items-center gap-5 p-4">
          <Logo/>
          <span className='text-white text-[20px]' >Administratsiya</span>
      </div>
      <div className="w-[78%] text-white flex items-center justify-center px-[10px]">
        <MenuFoldOutlined className='text-[25px]' />
        <div className="flex gap-5">
            <Tooltip placement='button' title={"Oxirgi malumot yengilangan vaqt : 30 yan , 2025 19:12"}>
                  <Button size='middle' icon={<InfoCircleOutlined/>}>Sinxronlash</Button>
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
