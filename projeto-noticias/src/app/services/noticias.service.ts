import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) { }

  readonly urlDaApi: string = 'http://localhost:3000';

  getTodasNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.urlDaApi}/noticias`)
  }

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
