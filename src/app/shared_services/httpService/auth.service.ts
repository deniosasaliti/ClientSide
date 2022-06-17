import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {SignupRequestPayload} from "../../base_components/auth/signup/signup-request.payload";
import {SerialInfoModel} from "../../home_page_components/serial-info/serialInfoModel";
import {LoginRequestPayload} from "../../base_components/auth/login/login-request.payload";
import {LocalStorageService} from "ngx-webstorage";
import {LoginResponse} from "../../base_components/auth/login/login-response.payload";
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authModel ={
    id:this.getUserId(),
    isLogin:this.checkIsLogin()
  }

  authBehaviorSubject = new BehaviorSubject<any>(this.authModel);
  // userId = new BehaviorSubject<any>(this.getUserId())


  refreshTokenPayload = {
    refreshToken:this.getRefreshToken(),
    userId:this.getUserId()
  }






  serverAddress:string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient,private localStorage:LocalStorageService) { }

  signup(signupRequestPayload:SignupRequestPayload): Observable<any>{
      return  this.httpClient.post(this.serverAddress + '/auth/signup',
        signupRequestPayload,{responseType:"text"})
  }

  login(loginRequestPayload:LoginRequestPayload):Observable<boolean>{

    return this.httpClient.post<LoginResponse>(this.serverAddress + '/auth/login',
      loginRequestPayload).pipe(map(data =>{
        this.localStorage.store('authenticationToken',data.token)
      this.localStorage.store('refreshToken',data.refreshToken)
      this.localStorage.store('expireTime',data.expireTime)
      this.localStorage.store('userId',data.userId)
      // this.isLogin.next(true);
      // this.userId.next(this.getUserId())
      this.authModel.isLogin = true;
      this.authModel.id = this.getUserId()
      this.authBehaviorSubject.next(this.authModel)
      return true
    }))

  }

  getAllSerials(id:any) : Observable<any>{
    // let qwe: any = {'id': id};
    let param = new HttpParams().set('id', id);
    return this.httpClient.post(this.serverAddress + '/auth/getPostById',param)
  }






  refreshToken():Observable<any>{
    return this.httpClient.post<LoginResponse>(this.serverAddress + '/auth/refreshToken',
      this.refreshTokenPayload).pipe(tap(data =>{

        this.localStorage.clear('authenticationToken')
        this.localStorage.clear('expireTime')

      this.localStorage.store('authenticationToken',data.token)
      this.localStorage.store('refreshToken',data.refreshToken)
      this.localStorage.store('expireTime',data.expireTime)
    }))

  }

  logout() {
    this.httpClient.post(this.serverAddress + '/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(()=>{
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('userId');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expireTime');
        this.authModel.isLogin = false;
        this.authModel.id = this.getUserId()
        this.authBehaviorSubject.next(this.authModel)

      })

  }



  private getRefreshToken() {
    return  this.localStorage.retrieve('refreshToken')
  }

  private getUserId() {
   return  this.localStorage.retrieve('userId')
  }
  getExpireTokenDate() {
    return this.localStorage.retrieve("expireTime")
  }

  getJwtToken() {
    return this.localStorage.retrieve("authenticationToken")
  }
  isTokenExpired():boolean{
    return  new Date().getTime() > new Date(this.localStorage.retrieve('expireTime')).getTime()
  }
  checkIsLogin():boolean{
    return this.localStorage.retrieve('authenticationToken') && !this.isTokenExpired();
  }
}
