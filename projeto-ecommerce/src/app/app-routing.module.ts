import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaComponent } from './component/interna/interna.component';
import { HomeComponent } from './component/home/home.component';
import { CarrinhoComponent } from './component/carrinho/carrinho.component';
import { RoupaComponent } from './component/crud/roupa/roupa.component';
import { CreateRoupaComponent } from './component/crud/create-roupa/create-roupa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interna/:id', component: InternaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'crud/roupa', component: RoupaComponent },
  { path: 'crud/roupa/criar', component: CreateRoupaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
