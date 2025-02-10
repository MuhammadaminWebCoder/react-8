import { GroupOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import getRequest from '../../../services/getRequest'
import Caption from '../../../components/Caption'
import CustomTable from '../../../components/CustomTable'
import { getGroups } from '../../../services/getGroups'
import { Input } from 'antd'
import FilterCustom from '../../../components/FilterCustom'
const Group = () => {

  const columns = [
    {
      title:'ID',
      dataIndex:'key'
    },
    {
      title:'Gurux nomi',
      dataIndex:'name'
    },
    {
      title:"O'quvchilar soni",
      dataIndex:'studentCount'
    },
    {
      title:"Asosoy Ustoz",
      dataIndex:'mainTeacher'
    },
    {
      title:'Ustoz lavozimi',
      dataIndex:'supportTeacher'
    },
    {
      title:'Xona',
      dataIndex:'room'
    },
    {
      title:'Holati',
      dataIndex:'status'
    },
    {
      title:'Boshlangan vaqti',
      dataIndex:'createdAt'
    },
    {
      title:'Batafsil',
      dataIndex:'action'
    }
  ]

  function handleSearchByName(e) {
    setIsLoading(true)
    const filterByName = groups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (e.target.value) {
      setTimeout(() => {
          setIsLoading(false)
          setGroups(filterByName)
      }, 1000);
    }
    else{
      setTimeout(() => {
        setIsLoading(false)
          setRefresh(!refresh)
      }, 1000);
    }
  }

    const {stackId} = useParams()
    const {name} = getRequest(`stack/${stackId}`)
    const [isLoading,setIsLoading] = useState()
    const  [groups,setGroups] = useState([])
    const [refresh,setRefresh] = useState(false)
    getGroups(stackId,refresh,setGroups)
    const [teacherId ,setTeacherId] = useState(null)
  return (
    <div className='p-5'>
      <Caption isBack={true} title={name} count={5} icon={<GroupOutlined/>} />
      <div className="my-5 flex gap-5">
        <Input onChange={handleSearchByName} className='!w-[350px]' size='large' placeholder='Qidirish...' allowClear />
        <FilterCustom API={`/techers?stackId=${stackId}`} filterId={teacherId} setFilterId={setTeacherId} placeholder={'ustoz boyicha saralash'} />
      </div>
      <CustomTable isLoading={isLoading} columns={columns} data={groups} />
    </div>
  )
}

export default Group
