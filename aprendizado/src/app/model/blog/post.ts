import { Comentario } from "./comentario";

export class Post {

  public titulo: string
  public data: string
  public texto: string
  public imagem: string
  public autorId: number
  public comentarios: Comentario[]
  public id: number

  constructor() {
    this.titulo = ''
    this.data = ''
    this.texto = ''
    this.imagem = ''
    this.autorId = 0
    this.comentarios = []
    this.id = 0
  }

}