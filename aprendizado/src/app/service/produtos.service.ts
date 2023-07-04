import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) { }

  // Constante - Seu valor nunca pode ser alterado, somente pode ser lido
  readonly urlDaApi: string = 'http://localhost:3000';

  // NomeDaFunção( Parametros que ira receber ): Observable< Tipo de informação que vai voltar >
  getTodosProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.urlDaApi}/produtos`) // http://localhost:3000/produtos
  }

  deleteProduto( idDoProduto: number ): Observable<Produto>{
    return this.http.delete<Produto>(`${this.urlDaApi}/produtos/${idDoProduto}`) // http://localhost:3000/produtos/ID-DO-PRODUTO
  }

}
