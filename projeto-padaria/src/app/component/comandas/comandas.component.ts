import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComandaAberta } from 'src/app/model/comanda-aberta';
import { Produto } from 'src/app/model/produto';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.scss']
})
export class ComandasComponent implements OnInit {

  arrayComandas: ComandaAberta[] = [];
  arrayProdutos: Produto[] = [];
  modalAberto: boolean = false;
  modalAdicionar: boolean = false;
  idComandaSelecionada: number = 0;
  formComanda: FormGroup = new FormGroup({
    idProduto: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required)
  })
  formFechar: FormGroup = new FormGroup({
    numComanda: new FormControl('', Validators.required)
  })

  constructor(
    private api: GeralService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.getProdutos()
    this.getComandas()
  }

  getComandas(): void{
    this.api.getTodasComandas().subscribe((resp) => {
      this.arrayComandas = resp
    })
  }

  getProdutos(): void{
    this.api.getTodosProdutos().subscribe((resp) => {
      this.arrayProdutos = resp
    })
  }

  // Função para criar uma comanda
  criarComanda(): void{
    // Acionando um SWAL para o usuário confirmar se quer abrir uma comanda
    Swal.fire({
      title: 'Criar uma nova comanda?', // Define o texto principal
      icon: 'question', // Define o ícone do SWAL
      showDenyButton: true, // Define se o botão de negar sera mostrado
      confirmButtonText: 'Sim!', // Define o texto do botão de confirmar
      denyButtonText: 'Não!' // Define o texto do botão de negar
    }).then((resultado) => { // Uma função para quando uma ação dentro do SWAL for tomada
      console.log(resultado)
      if(resultado.isConfirmed){ // Caso o usuário confirme a criação
        this.api.postCriarComanda(new ComandaAberta()).subscribe((resp) => {
          this.getComandas()
        })
      }
    })
  }

  fecharModal(): void{
    this.modalAberto = false
  }

  // Abre o modal de Adicionar produto em uma comanda que foi clicada
  abriModalAdicionar(idComandaClicada: number): void{
    this.idComandaSelecionada = idComandaClicada
    this.modalAberto = true
    this.modalAdicionar = true
  }

  // Adiciona um produto escolhido da comanda que esta aberta
  adicionaProduto(): void{
    this.api.getComandaPorId(this.idComandaSelecionada).subscribe((comandaResp) => {
      let comandaModificada = comandaResp

      // Flag (Aviso) que fica true se o produto ja existir na comanda
      let jaTemOProduto = false

      // Checagem se o produto ja existe na comanda
      for(let prod of comandaModificada.produtos){
        if(prod.idProduto == this.formComanda.value.idProduto){
          prod.quantidade += this.formComanda.value.quantidade
          // Se existe muda a Flag para true
          jaTemOProduto = true
        }
      }

      // Checar a Flag, caso for FALSE entra no IF
      if(!jaTemOProduto){
        comandaModificada.produtos.push({
          idProduto: Number(this.formComanda.value.idProduto),
          quantidade: this.formComanda.value.quantidade
        })
      }
      
      this.api.putEditaComanda(comandaModificada).subscribe((resp) => {
        Swal.fire({
          title: 'Produto adicionado',
          icon: 'success'
        })
        this.getComandas()
        this.modalAberto = false
      })

    })
  }

  abrirModalFecharComanda(): void{
    this.modalAberto = true
    this.modalAdicionar = false
  }

  fecharComanda(): void{
    let comandaExiste = false
    
    for(let comanda of this.arrayComandas){

      if(this.formFechar.value.numComanda == comanda.id){
        comandaExiste = true
      }

    }

    // Checa se a comanda NÃO existe
    if(!comandaExiste){
      alert('COMANDA INEXISTENTE')
      this.modalAberto = false
      return
    }

    this.router.navigateByUrl(`fechar/${this.formFechar.value.numComanda}`)
  }

}
