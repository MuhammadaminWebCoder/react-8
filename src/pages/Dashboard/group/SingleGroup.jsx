import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../../services/getRequest'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { instance } from '../../../hooks/instance'
import CustomTable from '../../../components/CustomTable'
import { getStudents } from '../../../services/getStudents'
import {deleteUser} from '../../../services/Delete'

const singleGroup = () => {
  const navigate = useNavigate()
  const {groupId} = useParams()
  const [refresh,setRefresh] = useState(false)
  const [deleteLoading,setDeleteLoading] = useState(false)
  const [deleteModal,setDeleteModal] = useState(false)
  const singleData = getRequest(`/groups/${groupId}`)
  const [students,setStudents] = useState([])
  const [tableLoading,setTableLoading] = useState(false)

  const columns = [
    {
      title:'ID',
      dataIndex:'key'
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


  const handleDeleteGroup = () => {
    setDeleteLoading(true)
    instance().get(`/students?groupId=${groupId}`).then(res => {
      if (res.data.length) {
        setTimeout(() => {
          toast.error("bu guruxda oquvchi bor . ochirib bolmaydi")
          setDeleteLoading(false)
          setDeleteModal(false)
        }, 1000);
      }
      else{
        toast.success("bu gurux ochirildi")
          setDeleteLoading(false)
          setDeleteModal(false)
        deleteUser(`/groups/${groupId}`,setDeleteLoading,setDeleteModal,navigate,toast)
      }
    })
}

getStudents(groupId,refresh,setStudents)
  return (
    <div className='p-5'>
      <div className="flex items-center justify-between">
        <Toaster/>
        <div className="flex items-center gap-3">
            <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]' /></button>
            <h2 className='font-bold text-[25px]'>{singleData.name} | {singleData.mainTeacher}</h2>
        </div>
        <div className="flex items-center gap-3">
            <Button onClick={() => setDeleteModal(true)} className='!bg-red-600 !text-white' size='large'><DeleteOutlined className='text-[22px]' /></Button>
            <Button onClick={() => navigate(`edit`)} type='primary' size='large' icon={<EditOutlined className='text-[20px]'/>}>Tahrirlash</Button>
        </div>
        <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDeleteGroup} title="Guruxni o'chirish">
        </Modal>
      </div>
        <div className="py-10">fill</div>
      <CustomTable isLoading={tableLoading} columns={columns} data={students} />

    </div>
  )
}

export default singleGroup
