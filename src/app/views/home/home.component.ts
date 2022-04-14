import { Component, OnInit } from '@angular/core';
import { Anuncios } from 'src/app/models/anuncios';

import { AnunciosService } from 'src/app/services/anuncios.service';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  

  constructor(private anunciosService: AnunciosService) { }

  listaAnuncios = [] as Anuncios[]

  ngOnInit(): void {
    this.carregarAnuncios()
  }

  carregarAnuncios() {
    this.anunciosService.getOfertas().subscribe( (ofertasRecebidas: Anuncios[]) => {
      this.listaAnuncios = ofertasRecebidas;
      console.log(this.listaAnuncios);
    } )
  }

  
  
}