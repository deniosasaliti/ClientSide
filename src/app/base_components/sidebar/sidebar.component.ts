import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  bundleFavorite:number = 3;
  bundleRecommended:number = 4;

 favorite:string[] =[
   '1',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   '10',
   '11'
 ];

  recommended:string[] =[
    '1r',
    '2r',
    '3r',
    '4r',
    '5r',
    '6r',
    '7r'
  ];

  constructor() {

  }

  ngOnInit(): void {

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
