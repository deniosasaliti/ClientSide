import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirstSharedService {

  serverAddress:string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) { }



   subject: Subject<any> = new ReplaySubject(1);

  getAllSerials() : Observable<any>{

    return this.httpClient.get(this.serverAddress + '/cont/getFrontPageInfo')
  }

  getAllSerialsByUserIdForSideBar(id:any):Observable<any>{
    let param = new HttpParams().set('id', id);

    return this.httpClient.post(this.serverAddress + '/cont/getAllSerialByIdForSideBar',param)
  }

  getAllSerialsById(id:any) : Observable<any>{
    // let qwe: any = {'id': id};
    let param = new HttpParams().set('id', id);
    return this.httpClient.post(this.serverAddress + '/cont/getAllSerialById',param)
  }

}
