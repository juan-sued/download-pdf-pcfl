import Main from '@/components/layout/Main'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import accountsMock from '@/mock/accountsMock'

import ListAccount from './AccordionListAccounts/Index'

export default function AccountsPage() {
  return (
    <Main>
      <Card className="w-full md: max-w-[700px]">
        <CardHeader>
          <CardTitle>Débitos e 2ª via de conta</CardTitle>
          <CardDescription className="space-y-1">
            INSTALAÇÃO: 32367201
          </CardDescription>
          <CardDescription className="space-y-1">
            ENDEREÇO: R. R VALENTIN, 177 - JD ALVORADA - JAHU/SP - CEP
            17.210-460
          </CardDescription>
          <CardDescription className="space-y-1">
            Protocolo de Atendimento: 1393983432
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <ListAccount
            key={'listAccount'}
            listAccount={accountsMock.listAccounts}
          />
        </CardContent>
      </Card>
    </Main>
  )
}
