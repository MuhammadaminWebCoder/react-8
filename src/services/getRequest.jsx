import React, { useEffect, useState } from 'react'
import {instance} from '../hooks/instance'

const getRequest = (api,isObj,changeId) => {
    const [data,setData] = useState(isObj ? {} :[])
    
    useEffect(() =>{
        instance().get(api).then(res => setData(res.data))
    },[changeId])
  return data
}

export default getRequest
