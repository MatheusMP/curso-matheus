import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/models/noticia';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit{

  idDaUrl: number = 0
  noticia: Noticia = new Noticia()

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiNoticias: NoticiasService
  ){}

  ngOnInit(): void {
    this.idDaUrl = this.rotaAtiva.snapshot.params['id']
    this.pegaInfo()
  }

  pegaInfo(): void {
    this.apiNoticias.getNoticiaPeloId(this.idDaUrl).subscribe( (data) => {
      this.noticia = data
      console.log(data)
    })
  }

}
