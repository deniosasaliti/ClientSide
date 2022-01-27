import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-newsfeed-page-info',
  templateUrl: './newsfeed-page-info.component.html',
  styleUrls: ['./newsfeed-page-info.component.css']
})
export class NewsfeedPageInfoComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  lastNews = [
    {q:"1"},
    {q:"1"},
    {q:"1"},
    {q:"1"}
  ]

  Paragraphs =[
    {q:"1"},
    {q:"1"},
    {q:"1"},
    {q:"1"}
  ]

}
