export class ConteudoSite {
  public home: {
    textoCategorias: string,
    produtosDestaque: number[],
    textoDestaque: string
  }
  public internaProduto: {
    sugestao: string
  }

  constructor(){
    this.home = {
      textoCategorias: '',
      produtosDestaque: [],
      textoDestaque: ''
    }
    this.internaProduto = {
      sugestao: ''
    } 
  }
}
