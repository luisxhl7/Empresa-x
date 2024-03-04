import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { StatisticalPage } from '../components/pages/StatisticalPage'

export const PublicRoutes = () => {

  return (
    <Routes>
      <Route path = '/'  element = { <StatisticalPage/> }/>
      <Route path = '/*' element = { <Navigate to = '/' /> }/>
    </Routes>
  )
}
