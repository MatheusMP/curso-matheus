import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Photos } from '../models/photos';
import { Albums } from '../models/albums';
import { Posts } from '../models/posts';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  readonly url: string = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http: HttpClient
  ) { }

  // USERS
  getTodosUsuarios(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.url}/users`)
  }
  getUsuarioPorId( id: number ): Observable<Users>{
    return this.http.get<Users>(`${this.url}/users/${id}`)
  }

  // PHOTOS
  getTodasFotos(): Observable<Photos[]>{
    return this.http.get<Photos[]>(`${this.url}/photos`)
  }
  getFotoPorId( id: number ): Observable<Photos>{
    return this.http.get<Photos>(`${this.url}/photo/${id}`)
  }

  // ALBUMS
  getTodosAlbums(): Observable<Albums[]>{
    return this.http.get<Albums[]>(`${this.url}/albums`)
  }
  getAlbumPorId( id: number ): Observable<Albums>{
    return this.http.get<Albums>(`${this.url}/albums/${id}`)
  }

  // POSTS
  getTodosPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.url}/posts`)
  }
  getPostPorId( id: number ): Observable<Posts>{
    return this.http.get<Posts>(`${this.url}/posts/${id}`)
  }

  // COMMENTS
  getTodosComentarios(): Observable<Comments[]>{
    return this.http.get<Comments[]>(`${this.url}/comments`)
  }
  geComentarioPorId( id: number ): Observable<Comments>{
    return this.http.get<Comments>(`${this.url}/comments/${id}`)
  }

}
