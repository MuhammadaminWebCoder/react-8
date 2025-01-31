import React from 'react'
import {PATH} from '../hooks/usePath'
import {Home,Groups,Market,Teachers,Students} from '../pages/Dashboard'

export const routes = [
        {
            id:1,
            path:PATH.Home,
            element:<Home/>,
            title:'Asosiy'
        },
        {
            id:2,
            path:PATH.Teachers,
            element:<Teachers/>,
            title:'Ustozlar'
        },
        {
            id:3,
            path:PATH.Students,
            element:<Students/>,
            title:`O'quvchilar`
        },
        {
            id:4,
            path:PATH.Groups,
            element:<Groups/>,
            title:'Guruxlar'
        },
        {
            id:5,
            path:PATH.Market,
            element:<Market/>,
            title:`Do'kon`
        },
    ]
