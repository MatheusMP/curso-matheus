import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  readonly urlDaApi: string = 'http://localhost:3000';

  getTodasNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias`)
  }

  getUltimas3Noticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias?_sort=dataPublicacao&_order=desc&_limit=3`)
  }

  // http://localhost:3000/noticias?_sort=dataPublicacao&_order=desc&_limit=3&categoria=2
  // _sort=PROPRIEDADE | para ordenar os itens pela propriedade informada
  // _order=asc ou _order=desc | para ordenar por ascendente ou decrescente
  // _limit=NUMERO | para colocar um limite máxima de itens que voltarão

  getNoticiaPeloId(id: number): Observable<Noticia>{
    return this.http.get<Noticia>(`${this.urlDaApi}/noticias${id}`)
  }

  getNoticiaPorCategoria(idCategoria: number): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias?categoria=${idCategoria}`)  // http://localhost:3000/noticias?categoria=2
  }

  getNoticiaPorAutor(idAutor: number): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias?autor=${idAutor}`) 
  }

  getNoticiaPorAutorECategoria(idAutor: number, idCategoria: number): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias?autor=${idAutor}&categoria=${idCategoria}`) 
  }

}
