import { Injectable } from '@angular/core';
import { Roupa } from '../models/roupa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  readonly apiUrl: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  // Roupas
  getTodasRoupas(): Observable<Roupa[]>{
    return this.http.get<Roupa[]>(`${this.apiUrl}/roupas`)
  }
  getRoupaPorId(id: number): Observable<Roupa>{
    return this.http.get<Roupa>(`${this.apiUrl}/roupas/${id}`)
  }

  // Usuario
  getUsuarioPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${id}`)
  }
  putEditaUsuario(id: number, mudanca: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiUrl}/usuarios/${id}`, mudanca)
  }

}
