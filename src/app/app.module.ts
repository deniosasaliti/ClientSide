import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base_components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {ActivatedRoute, RouterModule} from "@angular/router";
import { SignupComponent } from './base_components/auth/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './base_components/post/post.component';
import { CommentComponent } from './base_components/comment/comment.component';
import { PostsComponent } from './home_page_components/posts/posts.component';
import { LoginComponent } from './base_components/auth/login/login.component';
import { SidebarComponent } from './base_components/sidebar/sidebar.component';
import { StickybarComponent } from './base_components/stickybar/stickybar.component';
import { SerialsComponent } from './home_page_components/serials/serials.component';
import { SerialComponent } from './base_components/serial/serial.component';
import { StripSliderComponent } from './base_components/strip_slider/strip-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { ActorCardComponent } from './base_components/actor-card/actor-card.component';
import { SerialInfoComponent } from './home_page_components/serial-info/serial-info.component';
import { TranslateSliderComponent } from './base_components/translate-slider/translate-slider.component';
import { TranslateCardComponent } from './base_components/translate-card/translate-card.component';
import {RatingModule} from "ng-starrating";
import { ActorInfoComponent } from './base_components/actor-info/actor-info.component';
import { SiteCardComponent } from './base_components/site-card/site-card.component';
import { ModalSerialListComponent } from './base_components/modal-serial-list/modal-serial-list.component';

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
    CommentComponent,
    SerialsComponent,
    SerialComponent,
    StripSliderComponent,
    ActorCardComponent,
    SerialInfoComponent,
    TranslateSliderComponent,
    TranslateCardComponent,
    ActorInfoComponent,
    SiteCardComponent,
    ModalSerialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
