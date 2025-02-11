import React, { useState,useEffect } from 'react'
import CrudCaption from '../../components/CrudCaption'
import { Input,Select } from 'antd'
import FilterCustom from '../../components/FilterCustom'
import {Create,Edit} from '../../services/auth'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../services/getRequest'  
const TeachersCrud = () => {

  const {id} = useParams()
  const singleData = id && getRequest(`/techers/${id}`,true)
  
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate() 

  const [name,setName] = useState(null)
  const [sourname,setSourname] = useState(null)
  const [age,setAge] = useState(null)
  const [experience,setExperience] = useState(null)
  const [email,setEmail] = useState(null)
  const [phone,setPhone] = useState('+998')
  const [study,setStudy] = useState(null)
  const [stack,setStack] = useState(null)
  const [stackId,setStackId] = useState(null)
  const [region,setRegion] = useState(null)
  const [regionId,setRegionId] = useState(null)
  const [district,setDistrict] = useState(null)
  const [statusId,setStatusId] = useState(null)
  const [status,setStatus] = useState(null)
  const [gender,setGender] = useState(null)
  const [isMerried,setIsMerried] = useState(null)
  const [workCompanyId,setWorkCompanyId] = useState(null)
  const [workCompany,setWorkCompany] = useState(null)

  const handleAddTecher = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {name,sourname,age,stackId,stack,region,regionId,district,status,statusId,experience,gender,email,study,phone,isMerried,workCompany,workCompanyId}
    if (id) {
      data.id = id
      Edit(data,`/techers/${id}`,setIsLoading,navigate,toast)
    }
    else{
      Create(data,`/techers`,setIsLoading,navigate,toast)
    }
  }

  useEffect(() => {
    if (singleData) {
      setName(singleData.name)
      setSourname(singleData.sourname)
      setAge(singleData.age)
      setExperience(singleData.experience)
      setEmail(singleData.email)
      setPhone(singleData.phone)
      setStudy(singleData.study)
      setStack(singleData.stack)
      setStackId(singleData.stackId)
      setRegion(singleData.region)
      setRegionId(singleData.regionId)
      setDistrict(singleData.district)
      setStatus(singleData.status)
      setStatusId(singleData.statusId)
      setGender(singleData.gender)
      setIsMerried(singleData.isMerried)
      setWorkCompany(singleData.workCompany)
      setWorkCompanyId(singleData.workCompanyId)
    }
  },[id,singleData])
  
  return (
    <form autoComplete='off' onSubmit={handleAddTecher} className='p-5'>
      <Toaster position='top-center' reverseOrder={false} />
      <CrudCaption id={id} isLoading={isLoading} title={`Ustoz ${id?'taxrirlash':"qo'shish"}`}/>
      <div className='flex justify-evenly mt-10'>
          <div className="w-[40%] space-y-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} allowClear required size='large' placeholder='Ism Kiriting' />
            <Input value={sourname} onChange={(e) => setSourname(e.target.value)} allowClear required size='large' placeholder='Familiya Kiriting' />
            <Input value={age} onChange={(e) => setAge(e.target.value)} allowClear type='number' maxLength={3} required size='large' placeholder='Yosh Kiriting' />
            <Input value={experience} onChange={(e) => setExperience(e.target.value)} allowClear required size='large' placeholder='Tajriba Kiriting' />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} allowClear type='email' required size='large' placeholder='Email Kiriting' />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} allowClear required type='tel' size='large' placeholder='Telofon Kiriting' />
            <Input value={study} onChange={(e) => setStudy(e.target.value)} allowClear required size='large' placeholder="O'qish joyini Kiriting" />
          </div>
          <div className="w-[40%] gap-3 flex flex-col">
            <FilterCustom API={"/stack"} extraclass={'w-full'} placeholder={'stack tanlang'} filterId={stack} setFilterId={setStackId} setFilterName={setStack}/>
            <FilterCustom API={"/regions"} extraclass={'w-full'} placeholder={'viloyat tanlang'} filterId={region} setFilterId={setRegionId} setFilterName={setRegion}/>
            <Input value={district} onChange={(e) => setDistrict(e.target.value)} allowClear required size='large' placeholder='Tuman Kiriting' />
            <FilterCustom extraclass={`!w-[100%]`} API={"/status"} setFilterId={setStatusId} filterId={status} setFilterName={setStatus} placeholder={'Lavozim tanlang'}/>
            <Select value={gender} onChange={ (value) => setGender(value)} extraclass={'w-full'} size='large' placeholder={'Jins tanlang'} options={[{label:"Erkak",value:"Erkak"},{label:"Ayol",value:"Ayol"}]} />
            <Input value={isMerried} onChange={(e) => setIsMerried(e.target.value)} allowClear required size='large' placeholder='Turmush qurganmsz' />
            <FilterCustom API={"/workList"} extraclass={'w-full'} filterId={workCompanyId} placeholder={'Ish joyingizni tanlang'} mode={"multiple"} setFilterId={setWorkCompanyId} setFilterName={setWorkCompany}/>
          </div>
      </div>
    </form>
  )
}

export default TeachersCrud
