export class Avaliacao {
  public idUsuario: number
  public comentario: string
  public estrelas: number

  constructor() {
    this.idUsuario = 0
    this.comentario = ''
    this.estrelas = 0
  }
}