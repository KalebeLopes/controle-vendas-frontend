export class Venda {
  constructor(
    public tipo: string, 
    public valor: string,
    public data: string
  ) {}
  
  // public aplicarDesconto = (preco: number): number => {
  //   return preco - this.desconto
  // }

}