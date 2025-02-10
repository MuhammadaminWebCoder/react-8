import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const Caption = ({title, icon, count,isBack , addLink}) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate(addLink)
  }
  return (
    <div className='flex items-center justify-between'>
        <div className=' flex items-center gap-5'>
            {isBack ? <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]' /></button>:''}
            <div>
              <h2 className='font-bold text-[25px]'> {title}</h2>
              <p className='text-[15px] text-slate-400 lowercase'>{title} {count} ta</p>
            </div>
        </div>
        <Button onClick={handleButtonClick} htmlType='button' size='large' type='primary' icon={icon}>Qoshish</Button>
    </div>
  )
}

export default Caption
