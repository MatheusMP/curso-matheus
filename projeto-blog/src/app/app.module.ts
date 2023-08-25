import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULE DE API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    UsersComponent,
    AlbumsComponent
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
