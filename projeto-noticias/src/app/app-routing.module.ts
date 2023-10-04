import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { NoticiaComponent } from './component/noticia/noticia.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
