import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComandaAberta } from 'src/app/model/comanda-aberta';
import { Produto } from 'src/app/model/produto';
import { GeralService } from 'src/app/service/geral.service';

@Component({
  selector: 'app-fechar-comanda',
  templateUrl: './fechar-comanda.component.html',
  styleUrls: ['./fechar-comanda.component.scss']
})
export class FecharComandaComponent implements OnInit {

  idDaUrl: number = 0;
  comandaSelecionada: ComandaAberta = new ComandaAberta()
  produtos: Produto[] = [];

  constructor(
    private rotaAtiva: ActivatedRoute,
    private api: GeralService
  ){}

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarInfos()
  }

  pegarInfos(): void{
    this.api.getTodosProdutos().subscribe( (respProdutos) => {
      this.produtos = respProdutos
      this.api.getComandaPorId(this.idDaUrl).subscribe((respComanda) => {
        this.comandaSelecionada = respComanda
      })
    })
  }

  findProduto(id: number): any{
    // for( let prod of this.produtos){
    //   if(prod.id == id){
    //     return prod
    //   }
    // }
    // return null
    let prodEncontrado = this.produtos.find((prod) => prod.id == id)
    return prodEncontrado
  }

  precoTotal(): number{
    let soma = 0
    for(let prod of this.comandaSelecionada.produtos){
      soma += (prod.quantidade * this.findProduto(prod.idProduto).preco)
    }
    return soma
  }

  fecharComandar(): void{
    this.api.deletarComanda(this.idDaUrl).subscribe( () => {
      alert('COMANDA EXCLUÍDA!')
      location.href = 'http://localhost:4200/'
    })
  }

}
