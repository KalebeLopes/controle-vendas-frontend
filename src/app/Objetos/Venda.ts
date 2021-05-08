import { Item } from './Item'

export class Venda {
  constructor(
    public vendas: Item[], 
    public data: Date,
    public tipoPagamento: String,
    public qtdParcelas: number,
    public valorTotal: number,
    public qtdTotalItens: number,
    public _id: String

  ) {}
  
  // public aplicarDesconto = (preco: number): number => {
  //   return preco - this.desconto
  // }

}