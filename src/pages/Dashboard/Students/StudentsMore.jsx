import { ArrowLeftOutlined, DeleteOutlined, EditOutlined, PhoneFilled } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MoreItem from '../../../components/MoreItem'
import getRequest from '../../../services/getRequest'
import {deleteUser} from '../../../services/Delete'
const StudentsMore = () => {
  const {id} = useParams()
    const navigate = useNavigate()
    const singleData = id && getRequest(`/students/${id}`, true)
    const [deleteLoading,setDeleteLoading] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)

    const handleDeleteTeacher = () => {
        setDeleteLoading(true)
        deleteUser(`/students/${id}`,setDeleteLoading,navigate, setDeleteModal,toast)
    }
  return (
    <div className='p-5'>
      <div className="flex items-center justify-between">
        <Toaster/>
        <div className="flex items-center gap-3">
            <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]' /></button>
            <h2 className='font-bold text-[25px]'>{singleData.name} {singleData.surname}</h2>
        </div>
        <div className="flex items-center gap-3">
            <Link to={`tel:${singleData.phone}`}><Button className='!bg-green-600 !text-white' size='large'><PhoneFilled className='text-[22px]'/></Button></Link>
            <Button onClick={() => setDeleteModal(true)} className='!bg-red-600 !text-white' size='large'><DeleteOutlined className='text-[22px]' /></Button>
            <Button onClick={() => navigate(`edit`)} type='primary' size='large' icon={<EditOutlined className='text-[20px]'/>}>Tahrirlash</Button>
        </div>
      </div>
      <div className="flex justify-between mt-10">
          <ul className='p-5 space-y-2 rounded-md border-[2px] border-slate-400 w-[45%]'>
              <MoreItem title={'Student ID'} value={singleData.studentId} />
              <MoreItem title={'Ismi'} value={singleData.name} />
              <MoreItem title={'Familiya'} value={singleData.surname} />
              <MoreItem title={'Email manzili'} value={singleData.email} />
              <MoreItem title={"Phone manzili"} value={singleData.phone} />
              <MoreItem title={'Yoshi'} value={singleData.age} />
          </ul>
          <ul className='p-5 space-y-2 rounded-md border-[2px] border-slate-400 w-[45%]'>
              <MoreItem title={`Yo'nalishi`} value={singleData.stack} />
              <MoreItem title={'Guruxi'} value={singleData.group} />
              <MoreItem title={"Regioni"} value={singleData.region} />
              <MoreItem title={"Tumani"} value={singleData.district} />
              <MoreItem title={"Oqish joyi"} value={singleData.study} />
              <MoreItem title={"Holati"} value={singleData.status?'Active':'Active emas'} />
          </ul>
      </div>
      <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDeleteTeacher} title="Ustozni o'chirish"></Modal>
    </div>
  )
}

export default StudentsMore
