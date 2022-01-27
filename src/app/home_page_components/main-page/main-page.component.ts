import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  news = [
    {id:1, newsImg:''},
    {id:2, newsImg:''},
    {id:3, newsImg:''},
    {id:4, newsImg:''},
    {id:5, newsImg:''}
  ]

  onclick(id:any) {
    this.router.navigateByUrl('/news/' +id)
  }
}
