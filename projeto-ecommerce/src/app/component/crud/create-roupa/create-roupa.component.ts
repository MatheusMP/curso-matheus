import { Component } from '@angular/core';
import { Estoque } from 'src/app/models/estoque';

@Component({
  selector: 'app-create-roupa',
  templateUrl: './create-roupa.component.html',
  styleUrls: ['./create-roupa.component.scss']
})
export class CreateRoupaComponent {

  camposEstoque: Estoque[] = [{tamanho: '', quantidade: 0}]

  addEstoque(): void{
    this.camposEstoque.push(new Estoque())
  }

  removeEstoque(): void{
    this.camposEstoque.pop()
  }

  validateEstoque(): void{
    let erro = false
    for(let est of this.camposEstoque){
      if(est.tamanho.trim().length == 0 || est.quantidade <= 0){
        erro = true
      }
    }
    if(erro){
      alert('Um ou mais campos de estoque estão preenchidos incorretamente!')
    } else {
      alert('Campos de estoque estao ok')
    }
  }

}
