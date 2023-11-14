import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaComponent } from './component/interna/interna.component';
import { HomeComponent } from './component/home/home.component';
import { CarrinhoComponent } from './component/carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interna/:id', component: InternaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
