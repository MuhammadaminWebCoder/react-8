import { ArrowLeftOutlined, DeleteOutlined, EditOutlined, PhoneFilled } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../services/getRequest'
import MoreItem from '../../components/MoreItem'
import { deleteUser } from '../../services/Delete'
import toast, { Toaster } from 'react-hot-toast'

const TeachersMore = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const singleData = id && getRequest(`/techers/${id}`, true)
    const [deleteLoading,setDeleteLoading] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)

    const handleDeleteTeacher = () => {
        setDeleteLoading(true)
        deleteUser(`/techers/${id}`,setDeleteLoading,navigate, setDeleteModal,toast)
    }
  return (
    <div className='p-5'>
      <div className="flex items-center justify-between">
        <Toaster/>
        <div className="flex items-center gap-3">
            <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]' /></button>
            <h2 className='font-bold text-[25px]'>{singleData.name} {singleData.sourname}</h2>
        </div>
        <div className="flex items-center gap-3">
            <Link to={`tel:${singleData.phone}`}><Button className='!bg-green-600 !text-white' size='large'><PhoneFilled className='text-[22px]'/></Button></Link>
            <Button onClick={() => setDeleteModal(true)} className='!bg-red-600 !text-white' size='large'><DeleteOutlined className='text-[22px]' /></Button>
            <Button onClick={() => navigate(`edit`)} type='primary' size='large' icon={<EditOutlined className='text-[20px]'/>}>Tahrirlash</Button>
        </div>
      </div>
      <div className="flex justify-between mt-10">
          <ul className='p-5 space-y-2 rounded-md border-[2px] border-slate-400 w-[45%]'>
              <MoreItem title={'Stack nomi'} value={singleData.stack} />
              <MoreItem title={'Maqomi'} value={singleData.status} />
              <MoreItem title={'Tajribasi'} value={singleData.experience} />
              <MoreItem title={'Email manzili'} value={singleData.email} />
              <MoreItem title={"O'qish manzili"} value={singleData.study} />
          </ul>
          <ul className='p-5 space-y-2 rounded-md border-[2px] border-slate-400 w-[45%]'>
              <MoreItem title={'Yashash manzili'} value={singleData.stack} />
              <MoreItem title={'Tuman nomi'} value={singleData.experience} />
              <MoreItem title={'Turmush'} value={singleData.isMerried} />
              <MoreItem title={"Jinsi"} value={singleData.gender} />
              <li className='flex flex-col'>
                <span className='text-slate-400 text-[15px]'>Ish joy</span>
                <div className='flex mt-1 space-x-2'>
                  {singleData?.workCompany?.map((item,ind) => <Button  key={ind}>{item}</Button>)}
                </div>
              </li>
          </ul>
      </div>
      <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDeleteTeacher} title="Ustozni o'chirish">
        
      </Modal>
    </div>
  )
}

export default TeachersMore
