import { UserAddOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useState } from 'react'
import Caption from '../../components/Caption'
import {PATH} from '../../hooks/usePath'
import CustomTable from '../../components/CustomTable'
import FilterCustom from '../../components/FilterCustom'
import {getTeachers} from '../../services/getTeachers' 
const Teachers = () => {
  const [stackId,setStackId] = useState(null)
  const [teachers,setTeachers] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [refresh,setRefresh] = useState(false)

  const columns = [
    {
      title:'ID',
      dataIndex:'key'
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

  function handleSearchByName(e) {
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

  getTeachers(stackId,refresh,setTeachers)
  
  return (
    <div className='p-5'>
        <Caption addLink={PATH.TeachersAdd} title={'Ustozlar'} icon={<UserAddOutlined/>} count={5} />
        <div className='my-5 flex gap-10'>
            <label className='flex flex-col'>
              <span className='text-[15px] text-slate-400 pl-1 mb-1'>Qidirish</span>
              <Input onChange={handleSearchByName} className='!w-[350px]' placeholder='Qidirish' size='large' />
            </label>
            <label className='flex flex-col'>
              <span className='text-[15px] text-slate-400 pl-1 mb-1'>Choose stack</span>
              <FilterCustom API={"/stack"} placeholder={"stack tanlang"} filterId={stackId} setFilterId={setStackId} />
            </label>
        </div>
        <CustomTable isLoading={isLoading} columns={columns} data={teachers} />
    </div>
  )
}

export default Teachers
