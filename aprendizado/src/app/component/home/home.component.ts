import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[] = [];
  // mousepad: Produto = new Produto

  constructor(
    private apiProduto: ProdutosService
  ) { }

  ngOnInit(): void {
    this.pegaProdutos()
  }

  pegaProdutos(): void{
    this.apiProduto.getTodosProdutos().subscribe( (respApi) => {
      this.produtos = respApi
    })
  }

}
