import { Component } from '@angular/core';
import { Noticia } from 'src/app/model/noticia'; // Importa o modelo de nóticia
import { Router } from '@angular/router'; // Importa o modulo de rotas

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  arrayDeNoticias: Noticia[] = [
    {
      titulo: 'Santos estreia com derrota',
      categoria: 'Futebol',
      autor: 'Matheus',
      data: '17/04/2023',
      texto: 'oin0iunf ioausfhb aoifuah sfiuhas fiausfhaoifubaoisfub asfoiuab foiuab faiubsfioasubf',
      comentarios: [
        'Lorem',
        'Lorem'
      ]
    },
    {
      titulo: 'São Paulo estreia com derrota',
      categoria: 'Futebol',
      autor: 'Matheus',
      data: '17/04/2023',
      texto: 'oin0iunf ioausfhb aoifuah sfiuhas fiausfhaoifubaoisfub asfoiuab foiuab faiubsfioasubf',
      comentarios: [
        'Lorem',
        'Lorem'
      ]
    },
    {
      titulo: 'Cruzeiro estreia com derrota',
      categoria: 'Futebol',
      autor: 'Matheus',
      data: '17/04/2023',
      texto: 'oin0iunf ioausfhb aoifuah sfiuhas fiausfhaoifubaoisfub asfoiuab foiuab faiubsfioasubf',
      comentarios: [
        'Lorem',
        'Lorem'
      ]
    },
    {
      titulo: 'Atlético estreia com derrota',
      categoria: 'Futebol',
      autor: 'Matheus',
      data: '17/04/2023',
      texto: 'oin0iunf ioausfhb aoifuah sfiuhas fiausfhaoifubaoisfub asfoiuab foiuab faiubsfioasubf',
      comentarios: [
        'Lorem',
        'Lorem'
      ]
    }
  ]

  constructor( private router: Router ){}

}
