import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base_components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { SignupComponent } from './base_components/auth/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './base_components/post/post.component';
import { CommentComponent } from './base_components/comment/comment.component';
import { PostsComponent } from './home_page_components/posts/posts.component';
import { LoginComponent } from './base_components/auth/login/login.component';
import { SidebarComponent } from './base_components/sidebar/sidebar.component';
import { StickybarComponent } from './base_components/stickybar/stickybar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    PostComponent,
    PostsComponent,
    LoginComponent,
    SidebarComponent,
    StickybarComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
