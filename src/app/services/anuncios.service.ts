import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncios } from '../models/anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  url = "http://localhost:3000/Ofertas"
    
  constructor(private httpClient: HttpClient) { }

  getOfertas(): Observable<Anuncios[]> {
    return this.httpClient.get<Anuncios[]>(this.url)
  }


  
}


