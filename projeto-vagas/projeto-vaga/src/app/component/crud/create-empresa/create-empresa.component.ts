import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeralService } from 'src/app/service/geral.service';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/model/empresa/empresa';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.scss']
})
export class CreateEmpresaComponent implements OnInit{
  formularioEmpresa:FormGroup
  idDaUrl : number = 0
  empresa: Empresa[]=[]
  idEmpresaEditada : number = 0

constructor(
  private api:GeralService,
  private rotaAtiva: ActivatedRoute,
){
  this.formularioEmpresa = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
  })
}
  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegaEmpresas()
  }
  pegaEmpresas(): void{
    this.api.getEmpresas().subscribe( (empresas) => {
      this.empresa = empresas
    })
  }
  deletarEmpresa(id: number): void {
    this.api.deleteEmpresa(id).subscribe((respApi) => {
      this.pegaEmpresas()
    })
  }
  editaEmpresa(empresa:Empresa):void {
    this.formularioEmpresa.controls['nome'].setValue(empresa.nome) 
    this.idEmpresaEditada =empresa.id
   }
   
  criaEmpresa():void{
    let empresaNova = new Empresa()
    empresaNova.nome = this.formularioEmpresa.value.nome
    empresaNova.logo= this.formularioEmpresa.value.logo

    this.api.CriarNovaEmpresa( empresaNova ).subscribe( (data) => {
      alert('Postagem criada!')
    })
   
  }
}
