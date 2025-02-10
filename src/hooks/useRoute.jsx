import React from 'react'
import {PATH} from '../hooks/usePath'
import {Home,Market,TeachersMore,TeachersCrud, Teachers,Students} from '../pages/Dashboard'
import Stack from '../pages/Dashboard/stack/Stack'
import Group from '../pages/Dashboard/group/Group'
import { CodeSandboxOutlined, HomeOutlined, ShoppingCartOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'

export const dashboardNavList = [
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
            path:PATH.Stack,
            element:<Stack/>,
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
export const dashboardRouteList = [
    {
        id:1,
        path:PATH.Home,
        element:<Home/>,
    },
    {
        id:2,
        path:PATH.Teachers,
        element:<Teachers/>,
    },
    {
        id:3,
        path:PATH.Students,
        element:<Students/>,
    },
    {
        id:4,
        path:PATH.Stack,
        element:<Stack/>,
    },
    {
        id:5,
        path:PATH.Market,
        element:<Market/>,
    },
    {
        id:6,
        path:PATH.TeachersAdd,
        element:<TeachersCrud/>,
    },
    {
        id:7,
        path:PATH.TeachersMore,
        element:<TeachersMore/>,
    },
    {
        id:8,
        path:PATH.TeachersEdit,
        element:<TeachersCrud/>,
    },
    {
        id:9,
        path:PATH.Group,
        element:<Group/>,
    }
]
