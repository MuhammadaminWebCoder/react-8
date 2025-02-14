import React from 'react'
import StudentDash from '../../../components/StudentDash'
import { UsergroupAddOutlined } from '@ant-design/icons'
import Caption from '../../../components/Caption'
import { PATH } from '../../../hooks/usePath'
const Students = () => {
  return (
    <div className='p-5'>
      <Caption addLink={PATH.StudentsAdd} title={"O'quvchilar"}  icon={<UsergroupAddOutlined/>} count={10} />
      <StudentDash groupId={null} removeAddBtn={true} />
    </div>
  )
}

export default Students
