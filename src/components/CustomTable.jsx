import { Table } from 'antd'
import React from 'react'

const CustomTable = ({columns,data,isLoading}) => {
  return(
    <>
    <Table dataSource={data} columns={columns} loading={isLoading} />
    </>
  )
}

export default CustomTable
