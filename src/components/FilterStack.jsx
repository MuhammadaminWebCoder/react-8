import { Select } from 'antd'
import React from 'react'
import getRequest from '../services/getRequest'
const FilterStack = ({setStackId,stackId}) => {
    const stack = getRequest("/stack")
    const options = stack.map(item => ({label:item.name,value:item.id}))
  return (
    <Select 
        value={stackId}
        onChange={(value) => setStackId(value)}
        allowClear
        className='w-[350px]'
        size={'large'}
        showSearch
        placeholder="check Statck"
        optionFilterProp="label"
        options={options}
    />
  )
}

export default FilterStack
