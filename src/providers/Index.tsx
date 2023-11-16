import LoadingPage from '@/components/custom/LoadingPage'
import { Toaster } from '@/components/ui/toaster'
import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          {children}
          <Toaster />
        </Suspense>
      </BrowserRouter>
    </>
  )
}
