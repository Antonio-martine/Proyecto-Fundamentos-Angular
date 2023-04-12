import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { CommentsComponent } from '../pages/comments/comments.component';
import { PostComponent } from '../pages/post/post.component';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'comentarios',component: CommentsComponent},
  {path: 'post',component: PostComponent},
  {path: 'about',component: AboutComponent},
  //Redireccion: 
  {path: '**',redirectTo: 'home'},

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
