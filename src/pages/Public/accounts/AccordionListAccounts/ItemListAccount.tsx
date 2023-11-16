import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { IAccount } from '@/mock/accountsMock'
import formatUtils from '@/utils/formats'

interface IItemListAccount {
  index: number
  account: IAccount
}

export function ItemListAccount({ index, account }: IItemListAccount) {
  return (
    <AccordionItem
      value={`item-${index}`}
      key={index}
      className="md:min-w-[400px]"
    >
      <AccordionTrigger>
        {formatUtils.formatDateWithMonth(account.MesReferencia)}
      </AccordionTrigger>

      <AccordionContent className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row  py-2 gap-5 md:gap-0">
          <ColumnContent
            key="descriptionFatura"
            title="Descrição"
            value={account.DescricaoFatura}
          />

          <ColumnContent
            key="valueFatura"
            title="Valor"
            value={`R$ ${account.Valor}`}
          />
          <ColumnContent
            key="statusFatura"
            title="Status"
            value={account.DataPagamento ? 'Pago' : 'Em débito'}
          />
          <ColumnContent
            key="datePaymentFatura"
            title="Data de Pagamento"
            value={formatUtils.formatDateBrazil(account.DataPagamento)}
          />
        </div>
        <div className="p-5">
          <Button className="w-full transition-all  bg-gradient-to-r from-blue-600 to-blue-400  hover:from-blue-700 hover:to-blue-400 hover:shadow-xl hover:shadow-gray-300 active:scale-95 hover:scale-105">
            Baixar fatura
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

interface IColumnContent {
  title: string
  value: string
}

function ColumnContent({ title, value }: IColumnContent) {
  return (
    <>
      <div className=" space-y-2 w-full">
        <h2 className="font-semibold">{title}</h2>
        <p className=" text-muted-foreground">{value}</p>
      </div>
    </>
  )
}
