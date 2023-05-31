import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../model/receita';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:3000/';

  getAllReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl + 'receitas')
  }

  getReceitaById(id: string): Observable<Receita> {
    return this.http.get<Receita>(this.apiUrl + 'receitas/' + id)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + 'categorias')
  }

}
