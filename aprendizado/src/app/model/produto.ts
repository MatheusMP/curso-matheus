export class Produto {
  public nomeProduto: string
  public precoProduto: number
  public estoqueProduto: number
  public id: number
  public departamento: number

  // O constructor ele vai rodar quando uma variável for declarada como produto para iniciar valores
  // iniciais para a variável ser utilizada
  // Acionado com o new Produto
  constructor(){
    this.nomeProduto = ''
    this.precoProduto = 0
    this.estoqueProduto = 0
    this.id = 0
    this.departamento = 0
  }
}