import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/blog/usuario';
import { Post } from 'src/app/model/blog/post';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  formPost: FormGroup

  constructor(
    private apiBlog: BlogService
  ) {
    this.formPost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(70)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(100)
      ]),
      imagem: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  criarPost(): void{
    let postParaEnviar = new Post()
    postParaEnviar.titulo = this.formPost.value.titulo
    postParaEnviar.texto = this.formPost.value.texto
    postParaEnviar.imagem = this.formPost.value.imagem
    postParaEnviar.autorId = 2
    postParaEnviar.data = this.dataEmISOString()
    this.apiBlog.postCriaNovaPostagem( postParaEnviar ).subscribe( (data) => {
      alert('Postagem criada!')
    })
  }

  dataEmISOString(): string {
    let agora =  new Date()
    return agora.toISOString()
  }

}
