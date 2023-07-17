import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  formularioDpto: FormGroup;

  constructor( private apiProdutos: ProdutosService ) {
    this.formularioDpto = new FormGroup({
      departamento: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.pegaDepartamentos()
  }

  pegaDepartamentos(){
    this.apiProdutos.getTodosDepartamentos().subscribe( (respApi) => {
      this.departamentos = respApi
    })
  }

  abreModalCricaoDpto(): void {
    this.formularioDpto.controls['departamento'].setValue('')
    this.modalAberto = true
  }

  fechaModal(): void {
    this.modalAberto = false
  }

  criaDpto(): void{
    let dptoParaEnvio: Departamento = new Departamento()
    dptoParaEnvio.departamento = this.formularioDpto.value.departamento
    this.apiProdutos.postCriarNovoDepartamento( dptoParaEnvio ).subscribe( (respApi) => {
      alert('Departamento Criado!')
      this.modalAberto = false
      this.pegaDepartamentos()
    })
  }

}
