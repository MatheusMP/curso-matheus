export class Usuario {

  public username: String
  public pfp: String
  public resumo: String
  public postagens: Number[]
  public id: Number
  public login: String
  public senha: String

  constructor() {
    this.username = ''
    this.pfp = ''
    this.resumo = ''
    this.postagens = []
    this.id = 0
    this.login = ''
    this.senha = ''
  }

}
