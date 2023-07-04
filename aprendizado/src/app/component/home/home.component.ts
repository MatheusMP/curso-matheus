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

  constructor(
    private apiProduto: ProdutosService
  ) {
    this.formularioProduto = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      preco: new FormControl('', [Validators.required]),
      estoque: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.pegaProdutos()
  }

  abreModal(): void{
    this.modalAberto = true
  }
  fechaModal(): void{
    this.modalAberto = false
  }

  pegaProdutos(): void{
    this.apiProduto.getTodosProdutos().subscribe( (respApi) => {
      this.produtos = respApi
    })
  }

  deletarProduto( id: number ): void{
    this.apiProduto.deleteProduto( id ).subscribe( (respApi) => {
      this.pegaProdutos()
    })
  }

}
