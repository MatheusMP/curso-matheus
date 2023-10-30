import { Injectable } from '@angular/core';
import { Roupa } from '../models/roupa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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

}
