import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',Validators.required)
    });
  }

  get email() {
    return this.signupForm.get("email");
  }
  get password() {
    return this.signupForm.get("password");
  }
  get username()  {
    return this.signupForm.get("username");
  }

  signup() {

  }
}
