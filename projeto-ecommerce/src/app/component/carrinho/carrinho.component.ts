import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/models/carrinho';
import { Roupa } from 'src/app/models/roupa';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  produtos: Roupa[] = []

  constructor(
    private api: EcommerceService
  ) { }

  ngOnInit(): void {
    this.pegarInfos()
  }

  pegarInfos(): void {
    this.api.getTodasRoupas().subscribe((respRoupas) => {
      this.produtos = respRoupas
      let idUser = Number(localStorage.getItem('idUser'))
      this.api.getUsuarioPorId(idUser).subscribe((usuario) => {
        this.carrinho = usuario.carrinho
      })
    })

    // for(let item of this.carrinho){
    //   this.api.getRoupaPorId(item.produto).subscribe((roupa) => {
    //     this.produtos.push(roupa)
    //   })
    // }
  }

  findProduto(id: number): any {
    for (let roupa of this.produtos) {
      if (roupa.id == id) {
        return roupa
      }
    }
  }

  findProdutoImagem(id: number): string {
    for (let roupa of this.produtos) {
      if (roupa.id == id) {
        return roupa.imagem[0].caminho
      }
    }
    return ''
  }

  findProdutoPreco(id: number): number {
    for (let roupa of this.produtos) {
      if (roupa.id == id) {
        return roupa.preco
      }
    }
    return 0
  }

  precoTotal(): number {
    let preco = 0
    for (let item of this.carrinho) {
      preco += (this.findProduto(item.produto).preco * item.quantidade)
    }
    return preco
  }

  mudaQuantidade(item: Carrinho, diminui: boolean): void {
    // Fazer chamada para pegar o usuário com o carrinho dele
    let idUser = Number(localStorage.getItem('idUser'))
    this.api.getUsuarioPorId(idUser).subscribe((usuario) => {
      // Faz uma copia do usuario para guardar na variavel
      let copiaUsuario = usuario

      // Encontrar o index do produto dentro do carrinho comparando todos os valores dele
      let indexItem = 0
      for(let i = 0; i < copiaUsuario.carrinho.length; i++){
        if(copiaUsuario.carrinho[i].produto == item.produto && copiaUsuario.carrinho[i].quantidade == item.quantidade && copiaUsuario.carrinho[i].tamanho == item.tamanho){
          indexItem = i
        }
      }
      // Segunda maneira de achar o index do produto
      let acharIndexItem = copiaUsuario.carrinho.findIndex((carrinho) => carrinho.produto == item.produto && carrinho.quantidade == item.quantidade && carrinho.tamanho == item.tamanho)
      
      // Diminuir ou aumentar a quantidade do item com base no botão clicado
      if(diminui){
        copiaUsuario.carrinho[indexItem].quantidade--
      } else {
        copiaUsuario.carrinho[indexItem].quantidade++
      }

      // Checar se a quantidade do item ficou ZERO para retirar o item do carrinho
      if(copiaUsuario.carrinho[indexItem].quantidade == 0){
        copiaUsuario.carrinho.splice(indexItem, 1)
      }

      // Atualiza o item no JSON pela API
      this.api.putEditaUsuario(idUser, copiaUsuario).subscribe((usuarioAtualizado) => {
        // Atualiza o carrinho na tela conforme o usuario atualizado
        this.carrinho = usuarioAtualizado.carrinho
      })
    })
  }

}