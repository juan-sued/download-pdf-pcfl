import { Button } from '@/components/ui/button'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInFormSchema } from './schemas'
import { useToast } from '@/components/ui/use-toast'
import { ZapFormValues } from './types'
import { Link } from 'react-router-dom'
import { axiosI } from '@/components/services/axios'

const defaultValues: Partial<ZapFormValues> = {
  email: '',
  password: '',
}

export default function FormSignIn() {
  const { toast } = useToast()

  const form = useForm<ZapFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const Toast = (data: ZapFormValues) =>
    toast({
      variant: 'sucess',
      title: 'Você enviou os seguintes valores:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

  function onSubmit(data: ZapFormValues) {
    axiosI.post('/token', data)
    console.log('enviado')

    Toast(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="titleAndDescription flex flex-col gap-6 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="cpfl@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Digite seu email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="senhaSECRETA123" {...field} />
                </FormControl>
                <FormDescription>Digite sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-7">
          <Button
            className="bg-green-500 transition-all hover:bg-green-600 hover:shadow-md hover:shadow-green-300 active:scale-95   w-full"
            type="submit"
          >
            Login
          </Button>
          <h1>Ou</h1>
          <Button
            asChild
            variant="link"
            className="transition-all  active:scale-95   w-fit mt-[-15px]"
            type="submit"
          >
            <Link to="/sign-up">Cadastrar</Link>
          </Button>
        </section>
      </form>
    </Form>
  )
}
