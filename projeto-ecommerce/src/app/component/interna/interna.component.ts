import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from 'src/app/models/carrinho';
import { Roupa } from 'src/app/models/roupa';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {

  idDaUrl: number = 0
  roupa: Roupa = new Roupa()
  caminhoImagemDestaque: string = '';
  arrayNumeros: number[] = [0, 1, 2, 3, 4];
  tamanhoSelecionado: string = '';

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiEcommerce: EcommerceService
  ) {

  }

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.getInfos()
  }

  getInfos(): void {
    this.apiEcommerce.getRoupaPorId(this.idDaUrl).subscribe((respRoupa) => {
      // Depois que o item retorna da API é colocado o valor dele na variavel da roupa e na variavel da imagem em destaque
      this.roupa = respRoupa
      this.caminhoImagemDestaque = respRoupa.imagem[0].caminho
    })
  }

  mudaImagemDestaque(caminhoNovo: string): void {
    this.caminhoImagemDestaque = caminhoNovo
  }

  mudaTamanho(tamanhoNovo: string): void {
    this.tamanhoSelecionado = tamanhoNovo
  }

  adicionarAoCarrinho(): void {
    let idUser = Number(localStorage.getItem('idUser'))
    // Pega o usuário existente
    this.apiEcommerce.getUsuarioPorId(idUser).subscribe((respUser) => {
      // Faz uma copia dele para uma variavel
      let usuarioAlteracao = respUser

      let prodJaExiste = false
      let novoItem = new Carrinho()

      for(let item of respUser.carrinho){
        if(item.produto == this.idDaUrl && item.tamanho == this.tamanhoSelecionado){
          prodJaExiste = true
          novoItem = item
        }
      }

      if(prodJaExiste){
        novoItem.quantidade++
      } else {
        // Cria um novo item do carrinho
        novoItem.produto = this.idDaUrl
        novoItem.quantidade = 1
        novoItem.tamanho = this.tamanhoSelecionado
      }

      // Adiciona o novo item sem apagar os anteriores
      usuarioAlteracao.carrinho.push(novoItem)

      // Atualiza a API com o carrinho novo
      this.apiEcommerce.putEditaUsuario(idUser, usuarioAlteracao).subscribe((resp) => {
        alert('Carrinho atualizado!')
      })
    })
  }

}
