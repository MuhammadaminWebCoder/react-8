import React from 'react'
import {instance} from '../hooks/instance'
import toast from 'react-hot-toast';

export const Create = (data, API , setIsLoading, navigate,toast) => instance().post(API,data).then(() => {
    setTimeout(() => {
        setIsLoading(false)
            navigate(-1)
    }, 1000);
    setTimeout(() => {
        toast.success('qoshildi')
       }, 500);
})
export const Edit = (data, API , setIsLoading, navigate,toast) => instance().put(API,data).then(() => {
    setTimeout(() => {
        setIsLoading(false)
            navigate(-1)
    }, 1000);
    setTimeout(() => {
        toast.success('ozgardi')
       }, 500);
})