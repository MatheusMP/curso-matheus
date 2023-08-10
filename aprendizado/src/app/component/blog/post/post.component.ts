import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { Usuario } from 'src/app/model/blog/usuario';
import { Post } from 'src/app/model/blog/post';
import { Comentario } from 'src/app/model/blog/comentario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  idDaUrl: number = 0
  postAtual: Post = new Post()
  autores: Usuario[] = []
  formComentario: FormGroup

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiBlog: BlogService
  ) {
    this.formComentario =  new FormGroup({
      texto: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ])
    })
  }

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarInformacoes()
  }

  pegarInformacoes(): void{
    this.apiBlog.getTodosUsuarios().subscribe( (respApi) => {
      this.autores = respApi
      this.apiBlog.getPostPorId( this.idDaUrl ).subscribe( (resp2) => {
        this.postAtual = resp2
      })
    })
  }

  converteUsuario( id:number ): String{
    for( let user of this.autores ){
      if( user.id == id){
        return user.username
      }
    }
    return ''
  }

  converteUsuarioPfp( id:number ): String{
    for( let user of this.autores ){
      if( user.id == id){
        return user.pfp
      }
    }
    return ''
  }

  fazerComentario(): void{

    let novoId: number = 1
    if( this.postAtual.comentarios.length > 0 ){
      // So entra aqui se ja existir um comentário
      novoId = this.postAtual.comentarios.length + 1
    }

    let novoComentario = new Comentario
    novoComentario.texto = this.formComentario.value.texto
    novoComentario.autor = 2 // ESTATICO POR ENQUANTO
    novoComentario.data = this.dataEmISOString()
    novoComentario.id = novoId

    let postAlterado: Post = this.postAtual
    postAlterado.comentarios.push( novoComentario )
    this.apiBlog.putEditaPostagem( postAlterado ).subscribe( (respApi) => {
      this.pegarInformacoes()
      alert('Comentário feito')
    })

  }

  dataEmISOString(): string{
    let agora = new Date()
    return agora.toISOString()
  }

  checkLike(comentario:Comentario): boolean{
    return comentario.curtidas.includes( 3 )
  }

  funcaoLike(comentario: Comentario): void{
    console.log(comentario)
    let comentarioAlterado = comentario
    let postAlterado = this.postAtual
    if( comentario.curtidas.includes( 3 ) ){
      // Retirar o like
      comentarioAlterado.curtidas.splice(comentario.curtidas.indexOf(3), 1) // Retida o id baseado no index dele
    } else {
      // Coloco o like
      comentarioAlterado.curtidas.push(3)
    }
    // Procuro o comentario no post e altero ele com base na curtida que alteramos
    postAlterado.comentarios[ comentario.id - 1 ] = comentarioAlterado
    this.apiBlog.putEditaPostagem( postAlterado ).subscribe( (data) => {
      console.log('Comentario curtido ou descurtido')
      this.pegarInformacoes()
    })
  }

}
