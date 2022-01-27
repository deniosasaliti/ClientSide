import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignupRequestPayload} from "../../base_components/auth/signup/signup-request.payload";
import {SerialInfoModel} from "../../home_page_components/serial-info/serialInfoModel";

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

  getAllSerials(id:any) : Observable<any>{
    // let qwe: any = {'id': id};
    let param = new HttpParams().set('id', id);
    return this.httpClient.post(this.serverAddress + '/auth/getPostById',param)
  }
}
