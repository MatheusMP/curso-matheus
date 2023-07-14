import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DepartamentoComponent } from './component/departamento/departamento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departamento', component: DepartamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
