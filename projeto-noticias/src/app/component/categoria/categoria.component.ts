import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/models/noticia';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  noticias: Noticia[] = []
  idDaUrl: number = 0

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiNoticias: NoticiasService
  ){}

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarInfos()
  }

  pegarInfos(): void{
    this.apiNoticias.getNoticiaPorCategoria(this.idDaUrl).subscribe( (respNoticias) => {
      this.noticias = respNoticias
    })
    this.apiNoticias.getCategoriaPeloId(this.idDaUrl).subscribe( (respCategoria) => {
      this.categoria = respCategoria
    })
  }

}
