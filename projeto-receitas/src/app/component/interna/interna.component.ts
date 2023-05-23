import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/model/receita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {

  arrayDeReceitas: Receita[] = [];
  dificuldadeSelecionada: number = 0;

  constructor(
    private apiReceita: ReceitaService
  ) { }

  ngOnInit(): void {
    this.pegaReceitas()
  }

  pegaReceitas(): void{
    this.apiReceita.getAllReceitas().subscribe( (receitas) => {
      this.arrayDeReceitas = receitas
    })
  }

  alteraDificuldade( dificuldadeNova: number ): void{
    this.dificuldadeSelecionada = dificuldadeNova
    console.log(this.dificuldadeSelecionada)
  }

}
