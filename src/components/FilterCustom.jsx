import { Select } from 'antd'
import React, { useEffect } from 'react'
import getRequest from '../services/getRequest'
const FilterStack = ({extraclass,setFilterId,filterId,API,placeholder,mode,setFilterName,changeId}) => {
      const data = getRequest(API,null,changeId)
      const options = data.map((item,ind) => ({key:ind, label:item.name,value:item.id}))
    
    const onChange = (value,data) => {
      setFilterId(value)
      if (setFilterName) {
        if (mode == "multiple") {
          setFilterName(data.map(item => item.label))
        }
        else{
          setFilterName(data.label)
        }
      }
    }
    
    return (
    <Select 
        mode={mode}
        value={filterId}
        onChange={onChange}
        allowClear
        className={`w-[350px] ${extraclass}`}
        size={'large'}
        showSearch
        placeholder={placeholder}
        optionFilterProp="label"
        options={options}
    />
  )
}

export default FilterStack
