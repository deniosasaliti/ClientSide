import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./base_components/auth/signup/signup.component";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./home_page_components/posts/posts.component";
import {LoginComponent} from "./base_components/auth/login/login.component";
import {SerialsComponent} from "./home_page_components/serials/serials.component";
import {StripSliderComponent} from "./base_components/strip_slider/strip-slider.component";
import {SerialComponent} from "./base_components/serial/serial.component";
import {SerialInfoComponent} from "./home_page_components/serial-info/serial-info.component";
import {NewsfeedPageInfoComponent} from "./home_page_components/newsfeed-page-info/newsfeed-page-info.component";

const routes: Routes =[
  {path:'sign-up', component: SignupComponent},
  {path:'', component: PostsComponent},
  {path:'login', component: LoginComponent},
  {path:'serials', component: SerialsComponent},
  {path:'slider',component: StripSliderComponent},
  {path:'serials/:id',component: SerialInfoComponent},
  {path:'news',component: NewsfeedPageInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

