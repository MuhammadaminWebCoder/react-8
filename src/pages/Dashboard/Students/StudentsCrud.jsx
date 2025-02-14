import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import CrudCaption from '../../../components/CrudCaption'
import { Input, Select } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import FilterCustom from '../../../components/FilterCustom'
import {Edit,Create} from '../../../services/auth'
import getRequest from '../../../services/getRequest'
const StudentsCrud = () =>{
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const singleData = id && getRequest(`/students/${id}`,true)
  const [studentId,setStudentId] = useState(null)
  const [name,setName] = useState(null)
  const [surname,setSurname] = useState(null)
  const [group,setGroup] = useState(null)
  const [groupId,setGroupId] = useState(null)
  const [stackId,setStackId] = useState(null)
  const [stack,setStack] = useState(null)
  const [age,setAge] = useState(null)
  const [region,setRegion] = useState(null)
  const [regionId,setRegionId] = useState(null)
  const [district,setDistrict] = useState(null)
  const [study,setStudy] = useState(null)
  const [email,setEmail] = useState(null)
  const [phone,setPhone] = useState('+998')
  const handleAddTecher = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {studentId,name,surname,groupId,group,stackId,stack,region,regionId,district,age,study,email,phone,status:true}
    if (id) {
      data.id = id
      Edit(data,`/students/${id}`,setIsLoading,navigate,toast)
    }
    else{
      Create(data,`/students`,setIsLoading,navigate,toast)
    }
  }
  useEffect(() => {
      if (singleData) {
        setStudentId(singleData.studentId)
        setName(singleData.name)
        setSurname(singleData.surname)
        setAge(singleData.age)
        setEmail(singleData.email)
        setPhone(singleData.phone)
        setStudy(singleData.study)
        setStack(singleData.stack)
        setStackId(singleData.stackId)
        setRegion(singleData.region)
        setRegionId(singleData.regionId)
        setDistrict(singleData.district)
        setGroup(singleData.group)
        setGroupId(singleData.groupId)
      }
    },[id,singleData])
  return (
    <form autoComplete='off' onSubmit={handleAddTecher} className='p-5'>
      <Toaster position='top-center' reverseOrder={false} />
      <CrudCaption id={id} isLoading={isLoading} title={`O'quvchi ${id?'taxrirlash':"qo'shish"}`}/>
      <div className='flex justify-evenly mt-10'>
          <div className="w-[40%] flex flex-col gap-3">
            <Input value={studentId} onChange={(e) => setStudentId(e.target.value)} allowClear required size='large' placeholder='ID yarating' />
            <Input value={name} onChange={(e) => setName(e.target.value)} allowClear required size='large' placeholder='Ism Kiriting' />
            <Input value={surname} onChange={(e) => setSurname(e.target.value)} allowClear required size='large' placeholder='Familiya Kiriting' />
            <Input value={age} onChange={(e) => setAge(e.target.value)} allowClear required type='number' size='large' placeholder='Yosh Kiriting' />
            <Input value={phone} type='tel' onChange={(e) => setPhone(e.target.value)} allowClear required size='large' placeholder='telofon raqam yarating' />
            <Input value={email} type='email' onChange={(e) => setEmail(e.target.value)} allowClear required size='large' placeholder='email Kiriting' />
          </div>
            <div className="w-[40%] flex flex-col gap-3">
              <FilterCustom API={"/stack"} extraclass={'w-full'} placeholder={"Yo'nalish tanlang"} filterId={stackId} setFilterId={setStackId} setFilterName={setStack}/>
              <FilterCustom changeId={stackId} API={`/groups?stackId=${stackId}`} extraclass={'w-full'} placeholder={'gurux tanlang'} filterId={groupId} setFilterId={setGroupId} setFilterName={setGroup}/>
              <FilterCustom API={`/regions`} extraclass={'w-full'} placeholder={'region tanlang'} filterId={regionId} setFilterId={setRegionId} setFilterName={setRegion}/>
              <Input value={district} onChange={(e) => setDistrict(e.target.value)} allowClear required size='large' placeholder='Tuman yarating' />
              <Input value={study} onChange={(e) => setStudy(e.target.value)} allowClear required size='large' placeholder='Oqish joyini Kiriting' />
            </div>
      </div>
    </form>
  )
}

export default StudentsCrud
