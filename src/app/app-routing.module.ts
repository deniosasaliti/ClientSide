import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./auth/signup/signup.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes =[
  {path:'sign-up', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
