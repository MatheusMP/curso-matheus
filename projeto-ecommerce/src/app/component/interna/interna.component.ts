import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Roupa } from 'src/app/models/roupa';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {

  idDaUrl: number = 0
  roupa: Roupa = new Roupa()
  caminhoImagemDestaque: string = '';

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiEcommerce: EcommerceService
  ) {

  }

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.getInfos()
  }

  getInfos(): void {
    this.apiEcommerce.getRoupaPorId(this.idDaUrl).subscribe((respRoupa) => {
      // Depois que o item retorna da API é colocado o valor dele na variavel da roupa e na variavel da imagem em destaque
      this.roupa = respRoupa
      this.caminhoImagemDestaque = respRoupa.imagem[0].caminho
    })
  }

  mudaImagemDestaque(caminhoNovo: string): void {
    this.caminhoImagemDestaque = caminhoNovo
  }

}
