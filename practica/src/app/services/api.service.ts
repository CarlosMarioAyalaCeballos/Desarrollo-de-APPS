import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root,Origin,Location } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  apiUrl: string = 'https://rickandmortyapi.com/api/character';
  HttpClient: HttpClient;
    
  constructor(HttpClient: HttpClient) {
    this.HttpClient = HttpClient;
   }
  
  obtenerPersonajes(): Observable<any> {
    return this.HttpClient.get<any>(this.apiUrl);
  }
}
