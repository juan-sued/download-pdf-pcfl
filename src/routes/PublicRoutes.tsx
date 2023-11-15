import LoginPage from '@/pages/Auth/Login/Index'
import Home from '@/pages/Public/Index'
import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const NotFoundPage = lazy(() => import('@/pages/Errors/MessageNotFound'))

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<LoginPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default PublicRoutes
