import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const NotFoundPage = lazy(() => import('@/pages/Errors/MessageNotFound'))

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<NotFoundPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default PublicRoutes
