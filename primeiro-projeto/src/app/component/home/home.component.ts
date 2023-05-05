import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia'; // Importa o modelo de nóticia
import { Router } from '@angular/router'; // Importa o modulo de rotas
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayDeNoticias: Noticia[] = []

  constructor( 
    private router: Router,
    private apiNoticia: NoticiaService
  ){}

  // Função que roda quando a página é iniciada
  ngOnInit(): void {
    this.chamaTodasNoticias()
  }
  
  chamaTodasNoticias(): void{
    this.apiNoticia.getTodasNoticias().subscribe( (info) => {
      this.arrayDeNoticias = info
    })
  }

}
