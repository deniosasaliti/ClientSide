import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../shared_services/httpService/auth.service";
import {FirstSharedService} from "../../shared_services/first-shared.service";
import {SerialModel} from "../serial/serial.model";
import {map, tap} from "rxjs/operators";
import {Player} from "@vime/angular";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  bundleFavorite:number = 5;
  bundleRecommended:number = 5;
  isLogin:boolean;
  userId:number;


 followed:Array<SerialModel>


 popular:string[]= [
   '1r',
   '2r',
   '3r',
   '4r'
 ]

  recommended:string[] =[
    '1r',
    '2r',
    '3r',
    '4r',
    '5r',
    '6r',
    '7r'
  ];

  constructor(private  authService:AuthService,private firstSharedService:FirstSharedService) {

  }

  ngOnInit(): void {



    this.followed = new Array<SerialModel>()



    this.authService.authBehaviorSubject.subscribe(autModel=>{
      this.isLogin = autModel.isLogin
      if (this.isLogin){
        this.firstSharedService.getAllSerialsByUserIdForSideBar(autModel.id).subscribe(data=>{
          this.followed = data;
        })
      }

    })






  }

  upFavorite(){
    this.bundleFavorite+=2;




}
  upRecommended(){
    this.bundleRecommended+=2;
  }


  hideFavorite() {
   this.bundleFavorite-=2;
  }
  hideRecommended() {
    this.bundleRecommended-=2;
  }




}
