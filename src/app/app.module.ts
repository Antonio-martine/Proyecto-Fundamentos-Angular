import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PostComponent } from './pages/post/post.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
/*Importacion HTTP*/
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactoComponent,
    PostComponent,
    CommentsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    //agregar importacion FormsModule
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
