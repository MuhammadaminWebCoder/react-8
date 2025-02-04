import React from 'react'
import {PATH} from '../hooks/usePath'
import {Home,Groups,Market,Teachers,Students} from '../pages/Dashboard'
import { CodeSandboxOutlined, HomeOutlined, ShoppingCartOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'

export const routes = [
        {
            id:1,
            path:PATH.Home,
            element:<Home/>,
            title:'Asosiy',
            icon:<HomeOutlined className='!text-[22px]'/>
        },
        {
            id:2,
            path:PATH.Teachers,
            element:<Teachers/>,
            title:'Ustozlar',
            icon:<UserOutlined className='!text-[22px]'/>
        },
        {
            id:3,
            path:PATH.Students,
            element:<Students/>,
            title:`O'quvchilar`,
            icon:<UsergroupAddOutlined className='!text-[22px]'/>
        },
        {
            id:4,
            path:PATH.Groups,
            element:<Groups/>,
            title:'Guruxlar',
            icon:<CodeSandboxOutlined className='!text-[22px]'/>
        },
        {
            id:5,
            path:PATH.Market,
            element:<Market/>,
            title:`Do'kon`,
            icon:<ShoppingCartOutlined className='!text-[22px]'/>
        },
    ]
