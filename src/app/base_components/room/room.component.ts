import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {


  usersArray:Array<any>
  roomRedirectUrl:string

  constructor() { }

  ngOnInit(): void {
    this.usersArray =[
      {name:'user1'},
      {name:'user2'},
      {name:'user3'},
      {name:'user4'},
      {name:'user5'}
    ]
  }

}
