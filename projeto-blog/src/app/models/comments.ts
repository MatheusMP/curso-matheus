export class Comments {

  public postId: number
  public id: number
  public name: string
  public email: string
  public body: string

  constructor(){
    this.postId = 0
    this.id = 0
    this.name = ''
    this.email = ''
    this.body = ''
  }
  
}
