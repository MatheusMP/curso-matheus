import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULO DE API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { NoticiaComponent } from './component/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriaComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
