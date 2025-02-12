import { UserAddOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import CustomTable from './CustomTable'
import { getStudents } from '../services/getStudents'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../hooks/usePath'

const StudentList = ({groupId,removeAddBtn}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [students,setStudents] = useState([])
  const [refresh,setRefresh] = useState(false)
  const navigate = useNavigate()
    const columns = [
        {
          title:'ID',
          dataIndex:'key'
        },
        {
          title:"O'quvchi ID",
          dataIndex:'studentId'
        },
        {
          title:'Ismi',
          dataIndex:'name'
        },
        {
          title:'Familiya',
          dataIndex:'surname'
        },
        {
          title:'Yoshi',
          dataIndex:'age'
        },
        {
          title:'Telefon raqami',
          dataIndex:'phone'
        },
        {
          title:'Holati',
          dataIndex:'status'
        },
        {
          title:'Batafsil',
          dataIndex:'action'
        }
      ]
    
      const handleSearchChange = (e) => {
        setIsLoading(true)
        const filterByName = students.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.studentId.includes(e.target.value))
        if (e.target.value) {
          setTimeout(() => {
              setIsLoading(false)
              setStudents(filterByName)
          }, 1000);
        }
        else{
          setTimeout(() => {
            setIsLoading(false)
              setRefresh(!refresh)
          }, 1000);
        }
      }
      getStudents(groupId,refresh,setStudents)

  return (
    <>
        <div className="my-5 flex justify-between">
          <Input onChange={handleSearchChange} size='large' className='!w-[350px]' placeholder='Qidirish...' />
          {!removeAddBtn &&  <Button onClick={() => navigate(PATH.StudentsAdd)} icon={<UserAddOutlined/>} size='large' type='primary'>O'quvchi qo'shish</Button>}
        </div>
        <CustomTable isLoading={isLoading} columns={columns} data={students} />
    </>
  )
}

export default StudentList
