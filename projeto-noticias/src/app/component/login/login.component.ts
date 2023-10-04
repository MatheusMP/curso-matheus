import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  })

  constructor(
    private apiNoticia: NoticiasService
  ){}

  ngOnInit(): void{

  }

  fazLogin(): void{
    if(this.formLogin.value.user && this.formLogin.value.pass){
      this.apiNoticia.fazerLogin(this.formLogin.value.user, this.formLogin.value.pass).subscribe((respLogin) => {
        if(respLogin.length > 0){
          console.log('LOGADO')
          localStorage.setItem('idUser', String(respLogin[0].idUsuario))
          this.apiNoticia.getUsuarioPorId(respLogin[0].idUsuario).subscribe((respUsuario) => {
            localStorage.setItem('nameUser', String(respUsuario.nomeCompleto))
          })
        } else {
          console.log('FALHA NO LOGIN')
        }
      })
    }
  }

}
