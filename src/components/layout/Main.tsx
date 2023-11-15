import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface IMainProps {
  children: ReactNode
  className?: string
}

export default function Main({ children, className }: IMainProps) {
  return (
    <>
      <main
        className={cn(
          'p-6 flex flex-col justify-start items-center gap-4',
          className,
        )}
      >
        {children}
      </main>
    </>
  )
}
