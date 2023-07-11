import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutosService } from 'src/app/service/produtos.service';
// IMPORTS DE FORMULARIO
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[] = [];
  modalAberto: boolean = false;
  formularioProduto: FormGroup;
  edicaoProduto: boolean = false;
  idDaEdicao: number = 0;

  constructor(
    private apiProduto: ProdutosService
  ) {
    this.formularioProduto = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      preco: new FormControl('', [Validators.required, Validators.min(100)]),
      estoque: new FormControl('', [Validators.required, Validators.min(1000)])
    })
  }

  ngOnInit(): void {
    this.pegaProdutos()
  }

  abreModal(): void {
    this.formularioProduto.controls['nome'].setValue('')
    this.formularioProduto.controls['preco'].setValue('')
    this.formularioProduto.controls['estoque'].setValue('')
    this.edicaoProduto = false
    this.modalAberto = true
  }

  fechaModal(): void {
    this.modalAberto = false
  }

  abrirModalEditar(idDoProduto: number): void {
    this.apiProduto.getProdutoPeloId(idDoProduto).subscribe((respApi) => {
      this.formularioProduto.controls['nome'].setValue(respApi.nomeProduto)
      this.formularioProduto.controls['preco'].setValue(respApi.precoProduto)
      this.formularioProduto.controls['estoque'].setValue(respApi.estoqueProduto)
      this.idDaEdicao = idDoProduto
      this.edicaoProduto = true
      this.modalAberto = true
    })
  }

  pegaProdutos(): void {
    this.apiProduto.getTodosProdutos().subscribe((respApi) => {
      this.produtos = respApi
    })
  }

  deletarProduto(id: number): void {
    this.apiProduto.deleteProduto(id).subscribe((respApi) => {
      this.pegaProdutos()
    })
  }

  finalizarFormulario(): void {
    // Não precisa de validação de valores dos campos por causa do FormGroup
    let produtoParaEnviar: Produto = new Produto
    produtoParaEnviar.nomeProduto = this.formularioProduto.value.nome
    produtoParaEnviar.precoProduto = this.formularioProduto.value.preco
    produtoParaEnviar.estoqueProduto = this.formularioProduto.value.estoque
    if( this.edicaoProduto == true ){
      // Vai entrar aqui quando for a edição de um produto
      produtoParaEnviar.id = this.idDaEdicao
      this.apiProduto.putEditaProduto(produtoParaEnviar).subscribe( (respApi) => {
        this.pegaProdutos()
        this.modalAberto = false
      })
    } else {
      this.apiProduto.postCriarNovoProduto(produtoParaEnviar).subscribe((respApi) => {
        this.pegaProdutos()
        this.modalAberto = false
      })
    }
  }

}
