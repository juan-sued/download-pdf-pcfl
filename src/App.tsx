import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import Routes from './routes'
import LoadingPage from './components/custom/LoadingPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
