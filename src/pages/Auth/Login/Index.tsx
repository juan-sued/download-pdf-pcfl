import Main from '@/components/layout/Main'
import FormBasicTemplate from '@/components/templates/FormBasicTemplate'
import FormSignIn from './FormSignIn/Index'

export default function LoginPage() {
  return (
    <Main>
      <FormBasicTemplate
        cardTitle="Bem-vindo(a) ao Download PDF"
        cardDescription="Tudo que você precisa em um clique"
        className="max-w-lg"
      >
        <FormSignIn />
      </FormBasicTemplate>
    </Main>
  )
}
