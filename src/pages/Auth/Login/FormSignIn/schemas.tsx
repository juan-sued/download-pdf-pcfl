import { z } from 'zod'

const instalacaoRegex = /^[0-9]{8}$/

export const signInFormSchema = z.object({
  email: z.string().email('Digite um email válido'),
  senha: z
    .string()
    .min(5, {
      message: 'A senha deve conter mais de 4 caracteres.',
    })
    .max(30, {
      message: 'A senha deve conter menos de 30 caracteres.',
    }),
  instalacao: z.string().refine((valor) => instalacaoRegex.test(valor), {
    message: 'O valor deve ser um número com 8 dígitos. (ex: 32234212)',
  }),
})
