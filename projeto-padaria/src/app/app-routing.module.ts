import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandasComponent } from './component/comandas/comandas.component';
import { FecharComandaComponent } from './component/fechar-comanda/fechar-comanda.component';

const routes: Routes = [
  { path: '', component: ComandasComponent },
  { path: 'fechar/:id', component: FecharComandaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
