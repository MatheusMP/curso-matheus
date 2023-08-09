import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/blog/post';
import { Usuario } from '../model/blog/usuario';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient ) { }

  // Constante - Seu valor nunca pode ser alterado, somente pode ser lido
  readonly urlDaApi: string = 'http://localhost:3000';

  // POSTS
  getTodosPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.urlDaApi}/posts`)
  }
  
  getPostPorId( id:number ): Observable<Post>{
    return this.http.get<Post>(`${this.urlDaApi}/posts/${id}`)
  }

  postCriaNovaPostagem( novoPost: Post ): Observable<Post>{
    return this.http.post<Post>(`${this.urlDaApi}/posts`, novoPost)
  }

  putEditaPostagem( novoPost: Post ): Observable<Post>{
    return this.http.put<Post>(`${this.urlDaApi}/posts/${novoPost.id}`, novoPost) // http://localhost:3000/posts/ID -> POST
  }


  // USUARIOS
  getTodosUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.urlDaApi}/usuarios`)
  }

}
