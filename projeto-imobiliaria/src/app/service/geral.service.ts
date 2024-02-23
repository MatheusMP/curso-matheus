import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Imovel } from '../models/imovel';
import { Tipos } from '../models/tipos';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  readonly apiUrl: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  // Imoveis
  getPegarTodosImoveis(): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(`${this.apiUrl}/imoveis`)
  }
  getImoveisFiltrados(filtro:string): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(`${this.apiUrl}/imoveis?${filtro}`)
  }

  // Tipo do Imovel
  getPegarTodosTiposDeImovel(): Observable<Tipos[]>{
    return this.http.get<Tipos[]>(`${this.apiUrl}/tipos`)
  }

}
