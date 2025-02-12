import React from 'react'
import {PATH} from '../hooks/usePath'
import {Home,Market,TeachersMore,TeachersCrud, Teachers,Students, GroupCrud, SingleGroup, StudentsCrud, StudentsMore} from '../pages/Dashboard'
import Stack from '../pages/Dashboard/stack/Stack'
import Group from '../pages/Dashboard/group/Group'
import { CodeSandboxOutlined, HomeOutlined, ShoppingCartOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import StackCrud from '../pages/Dashboard/stack/StackCrud'

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
    },
    {
        id:10,
        path:PATH.GroupAdd,
        element:<GroupCrud/>,
    },
    {
        id:11,
        path:PATH.GroupEdit,
        element:<GroupCrud/>,
    },
    {
        id:12,
        path:PATH.GroupMore,
        element:<SingleGroup/>,
    },
    {
        id:13,
        path:PATH.StackAdd,
        element:<StackCrud/>,
    },
    {
        id:14,
        path:PATH.StackEdit,
        element:<StackCrud/>,
    },
    {
        id:15,
        path:PATH.StudentsAdd,
        element:<StudentsCrud/>,
    },
    {
        id:16,
        path:PATH.StudentsEdit,
        element:<StudentsCrud/>,
    },
    {
        id:17,
        path:PATH.StudentsMore,
        element:<StudentsMore/>,
    }
]
