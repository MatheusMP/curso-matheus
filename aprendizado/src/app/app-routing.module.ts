import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DepartamentoComponent } from './component/departamento/departamento.component';
import { BlogComponent } from './component/blog/blog/blog.component';
import { PostComponent } from './component/blog/post/post.component';
import { CriarPostComponent } from './component/blog/criar-post/criar-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post/:id', component: PostComponent },
  { path: 'blog/criar', component: CriarPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
