export interface Receita {
  titulo: string,
  imagem: string,
  rendimento: number,
  resumo: string,
  tempoPreparo: number,
  dificuldade: number,
  categoria: number,
  destaque: boolean,
  dataPublicacao: string,
  ingredientes: [
    {
      quantidade: string,
      ingrediente: string,
    }
  ],
  modoPreparo: [
    {
      passo: number,
      texto: string,
    }
  ],
  id: number,
}