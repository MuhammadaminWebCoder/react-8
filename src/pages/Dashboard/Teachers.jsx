import { LineOutlined, MoreOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import Caption from '../../components/Caption'
import FilterStack from '../../components/FilterStack'
import CustomTable from '../../components/CustomTable'
import {instance} from '../../hooks/instance' 
const Teachers = () => {
  const [stackId,setStackId] = useState(null)
  const [teachers,setTeachers] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [refresh,setRefresh] = useState(false)

  const columns = [
    {
      title:'ID',
      dataIndex:'id'
    },
    {
      title:'Ustoz ismi',
      dataIndex:'name'
    },
    {
      title:'Ustoz yoshi',
      dataIndex:'age'
    },
    {
      title:`Yo'namishi`,
      dataIndex:'stack'
    },
    {
      title:'Ustoz lavozimi',
      dataIndex:'status'
    },
    {
      title:'Ustoz raqami',
      dataIndex:'phone'
    },
    {
      title:'Batafsil',
      dataIndex:'action'
    },
  ]

  const handleSearchByName = (e) => {
    setIsLoading(true)
    const filterByName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (e.target.value) {
      setTimeout(() => {
          setIsLoading(false)
          setTeachers(filterByName)
      }, 1000);
    }
    else{
      setTimeout(() => {
        setIsLoading(false)
          setRefresh(!refresh)
      }, 1000);
    }
  }

  useEffect(() => {
      instance().get('/techers').then(res => {
        setTeachers(res.data.map((item,index) => {
          item.key = index
          item.name = item.name ? item.name : <LineOutlined/>
          item.age = item.age ? item.age : <LineOutlined/>
          item.stack = item.stack ? item.stack : <LineOutlined/>
          item.action = <Button className='!w-[32px] !h-[32px]' size='middle' type='primary'><MoreOutlined className='rotate-90'/></Button>
          return item
        }))
      })
    },[refresh])
  return (
    <div className='p-5'>
        <Caption title={'Ustozlar'} icon={<UserAddOutlined/>} count={5} />
        <div className='my-5 flex gap-10'>
            <label className='flex flex-col'>
              <span className='text-[15px] text-slate-400 pl-1 mb-1'>Qidirish</span>
              <Input onChange={handleSearchByName} className='!w-[350px]' placeholder='Qidirish' size='large' />
            </label>
            <label className='flex flex-col'>
              <span className='text-[15px] text-slate-400 pl-1 mb-1'>Choose stack</span>
              <FilterStack stackId={stackId} setStackId={setStackId} />
            </label>
        </div>
        <CustomTable isLoading={isLoading} columns={columns} data={teachers} />
    </div>
  )
}

export default Teachers
