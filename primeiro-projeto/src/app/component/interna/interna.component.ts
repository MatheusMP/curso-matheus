import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { Router } from '@angular/router'; // Importa o modulo de rotas
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {

  // Variável
  // noticiaTitulo: string = 'Santos estreia com derrota';
  // noticiaVisualicoes: number = 10;
  // comentarios: string[] = [
  //   'Lorem ipsum',
  //   'Lorem ipsum',
  //   'Lorem ipsum',
  //   'Lorem ipsum'
  // ]
  noticia: Noticia = {
    titulo: '',
    categoria: '',
    autor: '',
    data: '',
    texto: '',
    comentarios: [],
    id: 0
  }

  idDaUrl: number = 0

  constructor(
    private router: Router,
    private rotaAtiva: ActivatedRoute,
    private apiNoticia: NoticiaService
  ){}

  ngOnInit(): void {
    this.idDaUrl = this.rotaAtiva.snapshot.params['id']
    this.pegarNoticiaEspecifica()
  }

  pegarNoticiaEspecifica(): void{
    // this.apiNoticia.getTodasNoticias().subscribe( (info) => {
    //   console.log(info)
    //   for( let item of info ){
    //     if( item.id == this.idDaUrl ){
    //       this.noticia = item
    //     }
    //   }
    // })
    this.apiNoticia.getNoticiaPeloId( this.idDaUrl ).subscribe( (info) => {
      this.noticia = info
    })
  }

}
