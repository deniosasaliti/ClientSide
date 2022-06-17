import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestPayload} from "./login-request.payload";
import {AuthService} from "../../../shared_services/httpService/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload:LoginRequestPayload;


  constructor(private authService:AuthService) {
    this.loginPayload={
      name:'',
      password:''
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }


  login(){
    this.loginPayload.name = this.loginForm.get('username')?.value
    this.loginPayload.password = this.loginForm.get('password')?.value
    this.authService.login(this.loginPayload).subscribe(data=>{
      console.log(data)
    })

  }


  get password() {
    return this.loginForm.get("password");
  }
  get username()  {
    return this.loginForm.get("username");
  }
}
