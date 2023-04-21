import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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

}
