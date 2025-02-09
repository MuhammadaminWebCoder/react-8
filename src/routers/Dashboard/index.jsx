import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {dashboardRouteList} from '../../hooks/useRoute'
import DashboardLayout from '../../features'

const PageRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>{dashboardRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} />)} </Routes>
    </DashboardLayout>
  )
}

export default PageRoutes
