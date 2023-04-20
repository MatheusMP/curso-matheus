import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importa o componente que será utilizado
import { HomeComponent } from './component/home/home.component';
import { InternaComponent } from './component/interna/interna.component';

const routes: Routes = [
  // Configura cada roda de componente
  { path: '', component: HomeComponent },
  { path: 'interna', component: InternaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
