import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private http: HttpClient ) { }

  // URL base da api que será usada
  baseDaApi: string = 'http://localhost:3000/';

  // Nossa função retorna uma promessa de um valor que é um array de noticias
  getTodasNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.baseDaApi + 'noticias') // http://localhost:3000/noticias
  }

  getNoticiaPeloId( id:number ): Observable<Noticia>{
    return this.http.get<Noticia>(this.baseDaApi + 'noticias/' + id) // http://localhost:3000/noticias/1
  }

}
