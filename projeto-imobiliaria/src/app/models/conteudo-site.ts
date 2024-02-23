export class ConteudoSite {
  public home: {
    imoveisDestaque: number[],
    textoBusca: string,
    textoDestaque: string
  }

   constructor(){
    this.home = {
      imoveisDestaque: [],
      textoBusca: '',
      textoDestaque: ''
    }
   }
}
