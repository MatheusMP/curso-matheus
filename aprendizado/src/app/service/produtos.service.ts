import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { Departamento } from '../model/departamento';

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

  getProdutoPeloId( idDoProduto: number ): Observable<Produto>{
    return this.http.get<Produto>(`${this.urlDaApi}/produtos/${idDoProduto}`) // http://localhost:3000/produtos/ID-DO-PRODUTO
  }

  deleteProduto( idDoProduto: number ): Observable<Produto>{
    return this.http.delete<Produto>(`${this.urlDaApi}/produtos/${idDoProduto}`) // http://localhost:3000/produtos/ID-DO-PRODUTO
  }

  postCriarNovoProduto( produtoNovo: Produto ): Observable<Produto>{
    return this.http.post<Produto>(`${this.urlDaApi}/produtos`, produtoNovo) // Passamos URL e o objeto do novo produto
  }

  putEditaProduto( produtoAlterado: Produto ): Observable<Produto>{
    // Precisa do Id do produto e o objeto do produto alterado
    return this.http.put<Produto>(`${this.urlDaApi}/produtos/${produtoAlterado.id}`, produtoAlterado)
  }

  getTodosDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.urlDaApi}/departamentos`) // http://localhost:3000/departamentos
  }

}
