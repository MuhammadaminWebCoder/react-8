import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import dayjs from 'dayjs'
import CrudCaption from '../../../components/CrudCaption'
import { useNavigate, useParams } from 'react-router-dom'
import FilterCustom from '../../../components/FilterCustom'
import { DatePicker, Input } from 'antd'
import { Create, Edit } from '../../../services/auth'
import getRequest from '../../../services/getRequest'
const GroupCrud = () => {

  const {stackId,groupId} = useParams()
  const [isLoading,setIsLoading] = useState(false)
  const editGroupData = groupId && getRequest(`/groups/${groupId}`,true)
  console.log(groupId);

  const dateFormat = 'YYYY-MM-DD'
  const [name,setName] = useState(null)
  const [teacherId,setTeacherId] = useState(null)
  const [mainTeacher,setMainTeacher] = useState(null)
  const [roomId,setRoomId] = useState(null)
  const [room,setRoom] = useState(null)
  const [supportTeacher,setSupportTeacher] = useState(null)
  const date = new Date()
  const navigate = useNavigate()
  const [createdAt,setCreatedAt] = useState(`${date.getFullYear()}-${String(date.getMonth()  + 1).padStart(2,0)}-${String(date.getDate()).padStart(2,0)}`)
  
  function handleAddGroup(e) {
    setIsLoading(true)
    e.preventDefault()
    const data = {stackId,name,roomId,mainTeacher,teacherId,room,status: true,createdAt,supportTeacher}
    if (groupId) {
      data.id = groupId
      Edit(data,`/groups/${groupId}`,setIsLoading,navigate,toast)
    }
    else{
      Create(data,`/groups`,setIsLoading,navigate,toast)
    }
  }
  useEffect(()=>{
    if (editGroupData) {
      setName(editGroupData.name)      
      setTeacherId(editGroupData.teacherId)      
      setMainTeacher(editGroupData.mainTeacher)      
      setRoomId(editGroupData.roomId)      
      setRoom(editGroupData.room)      
      setSupportTeacher(editGroupData.supportTeacher)      
      setCreatedAt(editGroupData.createdAt)      
    }
  },[editGroupData])
  return (
    <form autoComplete='off' onSubmit={handleAddGroup} className='p-5'>
    <Toaster position='top-center' reverseOrder={false} />
    <CrudCaption id={groupId} isLoading={isLoading} title={`Gurux ${groupId?'taxrirlash':"qo'shish"}`}/>
    <div className='flex justify-evenly mt-10'>
        <div className="w-[40%] flex gap-3 flex-col">
          <Input value={name} onChange={(e) => setName(e.target.value)} allowClear required size='large' placeholder='Gurux nomini Kiriting' />
          <FilterCustom API={`/techers?stackId=${stackId}`} extraclass={'w-full'} placeholder={"Ustoz tanlang"} filterId={teacherId} setFilterName={setMainTeacher} setFilterId={setTeacherId}/>
          <Input value={supportTeacher} onChange={(e) => setSupportTeacher(e.target.value)} allowClear required size='large' placeholder='Yordamchi ustozning ismi' />
          <FilterCustom API={"/rooms"} extraclass={'w-full'} placeholder={"Ustoz tanlang"} filterId={roomId} setFilterName={setRoom} setFilterId={setRoomId}/>
          <DatePicker onChange={(a,b) => setCreatedAt(b)} className='w-full' size='large' defaultValue={dayjs(createdAt,dateFormat)}/>
        </div>
    </div>
  </form>
  )
}

export default GroupCrud
