import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  posts: Posts[] = []
  numeroCurtidas: number[] = []
  constructor(
    private api: GeralService
  ){}

  ngOnInit(): void {
    this.pegarInfos()
  }

  pegarInfos(): void{
    this.api.getTodosPosts().subscribe( (respApi) => {
      this.posts = respApi
      this.api.getTodosComentarios().subscribe( (comentarios) => {
        for( let post of this.posts ){
          let contagem = 0
          for( let coment of comentarios){
            if( coment.postId == post.id ){
              contagem++
            }
          }
          this.numeroCurtidas.push(contagem)
        }
      })
    })
  }

}
