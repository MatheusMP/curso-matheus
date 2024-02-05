import { ImagemImovel } from "./imagem-imovel";
import { ValoresImovel } from "./valores-imovel";

export class Imovel {
  public id: number
  public corretor: number
  public anuncio: string
  public tipoImovel: number
  public tipoDeVenda: string
  public valores: ValoresImovel
  public estado: string
  public cidade: string
  public bairro: string
  public cep: string
  public metragem: number
  public quartos: number
  public banheiros: number
  public vagas: number
  public caracteristicas: ImagemImovel[]
  public sobre: string

  constructor() {
    this.id = 0
    this.corretor = 0
    this.anuncio = ''
    this.tipoImovel = 0
    this.tipoDeVenda = ''
    this.valores = new ValoresImovel()
    this.estado = ''
    this.cidade = ''
    this.bairro = ''
    this.cep = ''
    this.metragem = 0
    this.quartos = 0
    this.banheiros = 0
    this.vagas = 0
    this.caracteristicas = []
    this.sobre = ''
  }
}