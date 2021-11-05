import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./base_components/auth/signup/signup.component";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./home_page_components/posts/posts.component";
import {LoginComponent} from "./base_components/auth/login/login.component";

const routes: Routes =[
  {path:'sign-up', component: SignupComponent},
  {path:'', component: PostsComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
