export class Comentario {

  public texto: string
  public autor: number
  public curtidas: number[]
  public data: string
  public id: number

  constructor() {
    this.texto = ''
    this.autor = 0
    this.curtidas = []
    this.data = ''
    this.id = 0
  }

}
