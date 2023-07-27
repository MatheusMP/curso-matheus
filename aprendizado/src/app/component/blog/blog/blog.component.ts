import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Post } from 'src/app/model/blog/post';
import { Usuario } from 'src/app/model/blog/usuario';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  usuarios: Usuario[] = [];

  constructor(
    private apiBlog: BlogService
  ) { }

  ngOnInit(): void {
    this.pegarUsuarios()
    this.pegarPosts()
  }

  pegarUsuarios(): void{
    this.apiBlog.getTodosUsuarios().subscribe( (respApi) => {
      this.usuarios = respApi
    })
  }

  pegarPosts(): void{
    this.apiBlog.getTodosPosts().subscribe( (respApi) => {
      this.posts = respApi
    })
  }

  converteUsuario( id:number ): String{
    for( let user of this.usuarios ){
      if( user.id == id){
        return user.username
      }
    }
    return ''
  }

  converteData( data: string ): string{
    // 2023-05-10T19:04:35.686Z
    let diaMesAno = data.split('T')[0].split('-').reverse().join('/') // 10/05/2023
    let hora = data.split('T')[1].split(':')[0] // 19
    let minuto = data.split('T')[1].split(':')[1] // 04
    return `${diaMesAno} ${hora}:${minuto}`
  }

}
