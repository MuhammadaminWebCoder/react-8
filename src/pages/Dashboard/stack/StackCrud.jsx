import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import CrudCaption from '../../../components/CrudCaption'
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from 'antd'
import {Create,Edit} from '../../../services/auth'
import getRequest from '../../../services/getRequest'
const StackCrud = () => {
    const {stackId} = useParams()
    const updateStack = stackId && getRequest(`/stack/${stackId}`,true)
    const [isLoading ,setIsLoading] = useState(false)
    const [name,setName] = useState(null)
    const [image,setImage] = useState(null)
    const navigate = useNavigate()
    function handleAddGroup(e) {
        e.preventDefault()
        setIsLoading(true)
        const data = {name,image}
        if (stackId) {
            data.id = stackId
            Edit(data,`/stack/${stackId}`,setIsLoading,navigate,toast)
          }
          else{
            Create(data,`/stack`,setIsLoading,navigate,toast)
          }
    }
    useEffect(() => {
        if (updateStack) {
            setName(updateStack.name)
            setImage(updateStack.image)
        }
    },[updateStack])
  return (
        <form autoComplete='off' onSubmit={handleAddGroup} className='p-5'>
            <Toaster position='top-center' reverseOrder={false} />
            <CrudCaption id={stackId} isLoading={isLoading} title={`Yo'nalish ${stackId?'taxrirlash':"qo'shish"}`}/>
            <div className='w-[500px] space-y-2 mx-auto mt-5'>
                <Input value={name} onChange={(e) => setName(e.target.value)} size='large' className='w-full' allowClear placeholder='Nomini kiriting' />
                <Input value={image} onChange={(e) => setImage(e.target.value)} size='large' className='w-full' allowClear placeholder='Rasm linkini kiriting' />
            </div>
        </form>
  )
}

export default StackCrud
