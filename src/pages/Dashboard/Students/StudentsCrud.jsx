import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import CrudCaption from '../../../components/CrudCaption'
import { Input, Select } from 'antd'
import { useParams } from 'react-router-dom'
import FilterCustom from '../../../components/FilterCustom'
const StudentsCrud = () => {
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams()
  const [studentId,setStudentId] = useState(null)
  const [name,setName] = useState(null)
  const [surname,setSurname] = useState(null)
  const [group,setGroup] = useState(null)
  const [groupId,setGroupId] = useState(null)
  const [stackId,setStackId] = useState(null)
  const [stack,setStack] = useState(null)
  const handleAddTecher = () => {

  }
  return (
    <form autoComplete='off' onSubmit={handleAddTecher} className='p-5'>
      <Toaster position='top-center' reverseOrder={false} />
      <CrudCaption id={id} isLoading={isLoading} title={`O'quvchi ${id?'taxrirlash':"qo'shish"}`}/>
      <div className='flex justify-evenly mt-10'>
          <div className="w-[40%] flex flex-col gap-3">
            <Input value={studentId} onChange={(e) => setStudentId(e.target.value)} allowClear required size='large' placeholder='ID yarating' />
            <Input value={name} onChange={(e) => setName(e.target.value)} allowClear required size='large' placeholder='Ism Kiriting' />
            <Input value={surname} onChange={(e) => setSurname(e.target.value)} allowClear required size='large' placeholder='Familiya Kiriting' />
            <FilterCustom API={"/stack"} extraclass={'w-full'} placeholder={"Yo'nalish tanlang"} filterId={stackId} setFilterId={setStackId} setFilterName={setStack}/>
            <FilterCustom changeId={stackId} API={`/groups`} extraclass={'w-full'} placeholder={'gurux tanlang'} filterId={groupId} setFilterId={setGroupId} setFilterName={setGroup}/>
          </div>
      </div>
    </form>
  )
}

export default StudentsCrud
