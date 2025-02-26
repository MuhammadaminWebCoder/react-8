import React from 'react'
import Caption from '../../../components/Caption'
import { CodeSandboxOutlined, EditFilled, MoreOutlined } from '@ant-design/icons'
import getRequest from '../../../services/getRequest'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'


function CardContent(navigate,id) {
  return(
    <div className='flex items-center gap-5'>
      <Button onClick={() => navigate(`edit/${id}`)} className='w-full !bg-green-600'><EditFilled className=' !text-white text-[20px]'/></Button>
      <Button onClick={() => navigate(`${id}`)} className='w-full' type='primary'><MoreOutlined className='rotate-90 text-[20px]' /></Button>
    </div>
  )
}

const Stack = () => {
  const navigate = useNavigate()
  const stackList = getRequest("/stack")
  
  return (
    <div className='p-5'>
      <Caption addLink={'add'} title={'Yonalishlar'} count={stackList.length} icon={<CodeSandboxOutlined/>} />
      <ul className='flex w-full mt-8 justify-between flex-wrap gap-5'>
        {stackList.map((item,ind) => (
          <Card className='w-[250px]' key={ind} hoverable cover={<img onClick={() => navigate(`${item.id}`)} alt='example' className='h-[140px] object-cover' src={item.image} />}>
            <Card.Meta title={item.name} description={CardContent(navigate,item.id)} />
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default Stack
 