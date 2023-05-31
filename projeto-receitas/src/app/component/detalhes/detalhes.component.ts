import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa o modulo de rota ativa
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/model/receita';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  idDaUrl: string = ''; //Cria a variável para o ID da URL
  receitaSelecionada: Receita = {
    titulo: '',
    imagem: '',
    rendimento: 0,
    resumo: '',
    tempoPreparo: 0,
    dificuldade: 0,
    categoria: 0,
    destaque: false,
    dataPublicacao: '',
    ingredientes: [
      {
        quantidade: '',
        ingrediente: '',
      }
    ],
    modoPreparo: [
      {
        passo: 0,
        texto: '',
      }
    ],
    id: 0,
  }

  constructor(
    private rotaAtiva: ActivatedRoute, // Chamando as funções do modulo de rota ativa
    private apiReceita: ReceitaService
  ) { }

  ngOnInit(): void {
    // Usa para a função para pegar o id da url e guardar na variável
    this.idDaUrl = this.rotaAtiva.snapshot.params['id']
    this.pegaReceita()
  }

  pegaReceita(): void {
    this.apiReceita.getReceitaById(this.idDaUrl).subscribe((resposta) => {
      console.log(resposta)
      this.receitaSelecionada = resposta
      this.receitaSelecionada.modoPreparo = this.receitaSelecionada.modoPreparo.sort( (a,b) => {
        return a.passo - b.passo
      })
    })
  }

}
