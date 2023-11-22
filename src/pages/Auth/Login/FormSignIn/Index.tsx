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
import { axiosUrlBase } from '@/services/axios'
import { useNavigate } from 'react-router-dom'

const defaultValues: Partial<ZapFormValues> = {
  email: '',
  senha: '',
  instalacao: '',
}

export default function FormSignIn() {
  const { toast } = useToast()

  const navigate = useNavigate()
  const form = useForm<ZapFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit() {
    const dataJson = {
      documento: '001.960.548-00',
      link: 'https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j101&tid=UA-7452068-1&cid=742166657.1699984884&jid=1291453085&gjid=1811682972&_gid=323220921.1699984887&_u=SCEAgAABAAAAAGAAI~&z=1186398527',
      token: '9PlgVWtiqq6uvNYFFGL7mV0Lpzj_QnfJbMztjYUi',
      timeout: 300,
    }

    try {
      const response = await axiosUrlBase.post(
        `/link?documento=${dataJson.documento}&link=${dataJson.link}&token=${dataJson.token}`,
        dataJson,
      )
      if (response.status === 200) {
        toast({
          variant: 'sucess',
          title: 'Tudo certinho!',
        })
        navigate('/accounts')
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Entrou com erro.',
      })
      navigate('/accounts')
      console.error('Erro durante a chamada à API:', error)
    }
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
            name="senha"
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
          <FormField
            control={form.control}
            name="instalacao"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Instalação</FormLabel>
                <FormControl>
                  <Input placeholder="32145313" {...field} />
                </FormControl>
                <FormDescription>Digite sua instalação.</FormDescription>
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
        </section>
      </form>
    </Form>
  )
}
