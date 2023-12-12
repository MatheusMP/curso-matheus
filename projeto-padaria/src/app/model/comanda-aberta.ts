import { ProdutoComanda } from "./produto-comanda"

export class ComandaAberta {

  public id: number
  public produtos: ProdutoComanda[]

  constructor(){
    this.id = 0
    this.produtos = []
  }

}
