import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaisVendidos } from '../models/mais-vendidos';

@Injectable({
  providedIn: 'root'
})
export class Anuncios2Service {
  url = "http://localhost:3000/mais-vendidos2"

  constructor(private httpClient: HttpClient) { }

  getMaisVendidos(): Observable<MaisVendidos[]> {
    return this.httpClient.get<MaisVendidos[]>(this.url)
  }

  
}
