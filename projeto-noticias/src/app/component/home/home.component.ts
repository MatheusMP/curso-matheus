import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ultimasNoticias: Noticia[] = []

  constructor(
    private noticiaApi: NoticiasService
  ){}

  ngOnInit(): void {
    this.pegaNoticias()
  }

  pegaNoticias(): void{
    this.noticiaApi.getUltimas3Noticias().subscribe( (respNoticias) => {
      this.ultimasNoticias = respNoticias
      console.log(this.ultimasNoticias)
    })
  }

}
