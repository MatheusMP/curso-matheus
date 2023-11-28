import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { Roupa } from 'src/app/models/roupa';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.scss']
})
export class RoupaComponent implements OnInit{

  categorias: Categoria[] = []
  roupas: Roupa[] = []

  constructor(
    private api: EcommerceService
  ){}

  ngOnInit(): void {
    this.getInfos()
  }

  getInfos(): void{
    this.api.getTodasCategorias().subscribe( (respCategs) => {
      this.categorias = respCategs
      this.api.getTodasRoupas().subscribe( (resposta) => {
        this.roupas = resposta
      })
    })
  }

  getCategValue(id: number): string{
    for(let categ of this.categorias){
      if(id == categ.id){
        return categ.categoria
      }
    }
    return ''
  }

}
