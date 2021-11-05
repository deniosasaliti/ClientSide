import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignupRequestPayload} from "../../base_components/auth/signup/signup-request.payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverAddress:string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestPayload:SignupRequestPayload): Observable<any>{
      return  this.httpClient.post(this.serverAddress + '/auth/signup',
        signupRequestPayload,{responseType:"text"})
  }
}
