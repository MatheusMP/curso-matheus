import { Component } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent {

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
    titulo: 'Santos estreia com derrota',
    categoria: 'Futebol',
    autor: 'Matheus',
    data: '17/04/2023',
    texto: 'oin0iunf ioausfhb aoifuah sfiuhas fiausfhaoifubaoisfub asfoiuab foiuab faiubsfioasubf',
    comentarios: [
      'Lorem',
      'Lorem'
    ]
  }

}
