import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { Usuario } from 'src/app/model/blog/usuario';
import { Post } from 'src/app/model/blog/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  idDaUrl: number = 0
  postAtual: Post = new Post()
  autores: Usuario[] = []

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiBlog: BlogService
  ) { }

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

}
