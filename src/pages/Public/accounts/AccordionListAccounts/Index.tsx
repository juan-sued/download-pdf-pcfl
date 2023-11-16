import { Accordion } from '@/components/ui/accordion'
import { IAccount } from '@/mock/accountsMock'
import { ItemListAccount } from './ItemListAccount'

interface IListAccountProps {
  listAccount: IAccount[]
}

export default function ListAccount({ listAccount }: IListAccountProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {listAccount.map((account, index) => (
        <ItemListAccount key={index} index={index} account={account} />
      ))}
    </Accordion>
  )
}
