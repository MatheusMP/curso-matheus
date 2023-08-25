import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'users', component: UsersComponent },
  { path: 'albums/:id', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
