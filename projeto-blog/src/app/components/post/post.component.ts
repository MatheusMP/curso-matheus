import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeralService } from 'src/app/service/geral.service';
import { Posts } from 'src/app/models/posts';
import { Users } from 'src/app/models/users';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  idDoPostNaUrl: number = 0
  post: Posts = new Posts()
  usuarios: Users[] = []
  comentarios: Comments[] = []

  constructor(
    private api: GeralService,
    private rotaAtiva: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.idDoPostNaUrl = Number( this.rotaAtiva.snapshot.params['id'] )
    this.pegarInfos()
  }

  pegarInfos(): void{
    this.api.getTodosUsuarios().subscribe( (respApiUsers) => {
      this.usuarios = respApiUsers

      this.api.getTodosComentarios().subscribe( (respApiComments) => {
        this.comentarios = respApiComments

        this.api.getPostPorId( this.idDoPostNaUrl ).subscribe( (respApiPost) => {
          this.post = respApiPost
        })

      })
      
    })
  }

  achaUsuario(id:number): string{
    for(let user of this.usuarios){
      if(user.id == id){
        return user.name
      }
    }
    return ''
  }

}
