import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComandaAberta } from '../model/comanda-aberta';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor( private http: HttpClient ) { }

  readonly urlDaApi: string = 'http://localhost:3000';

  // Pega todas as comandas
  getTodasComandas(): Observable<ComandaAberta[]> {
    return this.http.get<ComandaAberta[]>(`${this.urlDaApi}/comandasAbertas`)
  }
  // Pega comanda por id
  getComandaPorId(idDaComanda: number): Observable<ComandaAberta> {
    return this.http.get<ComandaAberta>(`${this.urlDaApi}/comandasAbertas/${idDaComanda}`)
  }
  // Criar nova comanda
  postCriarComanda(novaComanda: ComandaAberta): Observable<ComandaAberta>{
    return this.http.post<ComandaAberta>(`${this.urlDaApi}/comandasAbertas`, novaComanda)
  }
  // Edita comanda por id
  putEditaComanda(comandaAlterada: ComandaAberta): Observable<ComandaAberta>{
    return this.http.put<ComandaAberta>(`${this.urlDaApi}/comandasAbertas/${comandaAlterada.id}`, comandaAlterada)
  }

  // Pega todos os produtos
  getTodosProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.urlDaApi}/produtos`)
  }

}
