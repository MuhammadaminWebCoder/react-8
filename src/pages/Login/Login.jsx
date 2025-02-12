import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Logo } from '../../assets/icons/Logo'
import getToken from '../../hooks/getToken'
import getRequest from '../../services/getRequest'
const Login = () => {

  const {setToken} = getToken()
  const [isLoading,setIsLoading] = useState(false)
  const allUsers = getRequest("/users")

  function handleSubmitLogin(data) {
    setIsLoading(true)
    const isUser = allUsers.some(item => item.username == data.username && item.password == data.password)
    setTimeout(() => {
      if (isUser) {
        setToken(data)
      }
      else{
        toast.error("xato bor")
      }
      setIsLoading(false)
    }, 1000);

  }

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <Toaster position='top-center' reverseOrder={false}/>
      <div className="w-[360px] text-center mx-auto">
        <div className="flex items-center justify-center gap-[10px] main-color mb-[25px]">
            <Logo/>
            <span className='text-black text-[30px] font-medium'>Admin Paneli</span>
        </div>
        <Form onFinish={handleSubmitLogin} className='w-full text-start' autoComplete='off'>
          <Form.Item name={"username"}
          rules={[
            {
              required:true,
              message:'Bosh qolmasligi kerak'
            },]}>
              <Input size='large' prefix={<UserOutlined/>} placeholder='logIn' />
          </Form.Item>
          <Form.Item name="password"  
          rules={[
            {
              required:true,
              message:'bosh qolmasligi kerak'
            }]}>
              <Input size='large' prefix={<LockOutlined/>} type='password' placeholder='parol' />
            </Form.Item>
            <Button loading={isLoading} htmlType='submit' className='w-full' size='large' type='primary'>Kirish</Button>
        </Form>
      </div>
    </div>
  )
}

export default Login


