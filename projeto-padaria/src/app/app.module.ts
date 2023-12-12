import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULO DE API
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComandasComponent } from './component/comandas/comandas.component';
import { FecharComandaComponent } from './component/fechar-comanda/fechar-comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    ComandasComponent,
    FecharComandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
