import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Button } from '../ui/button'

interface IFormBasicTemplate {
  children: ReactNode
  cardTitle: string
  cardDescription: string
  className?: string
}

export default function FormBasicTemplate({
  children,
  cardTitle,
  cardDescription,
  className,
}: IFormBasicTemplate) {
  return (
    <section className="sectionFormCreateZap h-full w-full p-5 flex justify-center">
      <Card
        className={cn(
          'max-w-5xl min-w-[350px]  h-full flex flex-col content-between shadow-md  shadow-[hsla(0,0%,0%,0)] transition-all',
          className,
        )}
      >
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="text-muted-foreground  justify-center  ">
          <h4>Precisa de ajuda?</h4>
          <Button
            variant="link"
            className="active:scale-95 transition-all  ml-[-12px]"
          >
            Clique aqui
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
