import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Criação de variáveis
  username: string = '';
  password: string = '';
  
  // Declaração de uma function
  alertaBotao(){
    if( this.username == '' ){
      alert('Preencha o campo Username!')
    } else {
      alert( this.username )
    }
  }

  // Função que checa a quantidade de caracteres no username e password para 
  // habilitar ou desabilitar o botao
  habilitaBotao(){
    if( this.username.length > 0 && this.username.length <= 10 && this.password.length >= 4 ){
      return false // habilita
    } else {
      return true // desabilita
    }
  }

  checaUsername(){
    if( this.username.length > 10 ){
      return 'erro'
    } else {
      return ''
    }
  }
  checaPassword(){
    if( this.password.length > 0 && this.password.length < 4 ){
      return 'erro'
    } else {
      return ''
    }
  }

}
