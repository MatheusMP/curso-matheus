import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULO DE API
import { HttpClientModule } from '@angular/common/http';

// MODULE DO FORMS
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { DepartamentoComponent } from './component/departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    DepartamentoComponent
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
