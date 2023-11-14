import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/models/carrinho';
import { Roupa } from 'src/app/models/roupa';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit{

  carrinho: Carrinho[] = [];
  produtos: Roupa[] = []

  constructor(
    private api: EcommerceService
  ){}

  ngOnInit(): void {
    this.pegarInfos()
  }

  pegarInfos(): void{
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

  findProduto(id: number): any{
    for(let roupa of this.produtos){
      if(roupa.id == id){
        return roupa
      }
    }
  }

  findProdutoImagem(id: number): string{
    for(let roupa of this.produtos){
      if(roupa.id == id){
        return roupa.imagem[0].caminho
      }
    }
    return ''
  }

  findProdutoPreco(id: number): number{
    for(let roupa of this.produtos){
      if(roupa.id == id){
        return roupa.preco
      }
    }
    return 0
  }

  precoTotal(): number{
    let preco = 0
    for(let item of this.carrinho){
      preco += ( this.findProduto(item.produto).preco * item.quantidade )
    }
    return preco
  }

}