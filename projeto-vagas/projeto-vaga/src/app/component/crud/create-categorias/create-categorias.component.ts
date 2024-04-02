import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeralService } from 'src/app/service/geral.service';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/model/categorias/categorias';

@Component({
  selector: 'app-create-categorias',
  templateUrl: './create-categorias.component.html',
  styleUrls: ['./create-categorias.component.scss']
})
export class CreateCategoriasComponent implements OnInit{
  formularioCategoria:FormGroup
  idDaUrl : number = 0
  categoria: Categorias[]=[]
  idCategoriaEditada : number = 0
  
  constructor(
    private api: GeralService,
    private rotaAtiva: ActivatedRoute,
  ){
    this.formularioCategoria= new FormGroup({
      icone: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegaCategorias()
  }
  pegaCategorias(): void{
    this.api.getCategorias().subscribe( (categorias) => {
      this.categoria = categorias
    })
  }
  deletarCategoria(id: number): void {
    this.api.deleteCategoria(id).subscribe((respApi) => {
      this.pegaCategorias()
    })
  }
  editaCategoria(categoria:Categorias):void {
    this.formularioCategoria.controls['categorias'].setValue(categoria.categoria) 
    this.idCategoriaEditada =categoria.id
   }


  criaCategoria():void{
    let categoriaNova = new Categorias()
    categoriaNova.icone = this.formularioCategoria.value.icone
    categoriaNova.categoria= this.formularioCategoria.value.categoria

    this.api.CriarNovaCategoria( categoriaNova ).subscribe( (data) => {
      alert('Postagem criada!')
    })
   
  }
}
