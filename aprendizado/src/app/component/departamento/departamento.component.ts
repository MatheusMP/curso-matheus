import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/model/departamento';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  departamentos: Departamento[] = [];
  modalAberto: boolean = false;

  constructor( private apiProdutos: ProdutosService ) {}

  ngOnInit(): void {
    this.pegaDepartamentos()
  }

  pegaDepartamentos(){
    this.apiProdutos.getTodosDepartamentos().subscribe( (respApi) => {
      this.departamentos = respApi
    })
  }

  abreModal(): void {
    this.modalAberto = true
  }

  fechaModal(): void {
    this.modalAberto = false
  }

}
