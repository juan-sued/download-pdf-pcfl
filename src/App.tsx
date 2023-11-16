import '@/index.css'

import { FC } from 'react'
import Routes from './routes'
import Providers from './providers/Index'

const App: FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  )
}

export default App
