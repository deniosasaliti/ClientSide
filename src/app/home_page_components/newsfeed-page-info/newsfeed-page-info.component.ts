import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "@vime/angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {retry} from "rxjs/operators";



// const logo = require('src/assets/images/stick.png').default as string;
@Component({
  selector: 'app-newsfeed-page-info',
  templateUrl: './newsfeed-page-info.component.html',
  styleUrls: ['./newsfeed-page-info.component.css']
})
export class NewsfeedPageInfoComponent implements OnInit {


  constructor() {

  }








  ngOnInit(): void {

  }


  lastNews = [
    {q: "1"},
    {q: "1"},
    {q: "1"},
    {q: "1"}
  ]

  Paragraphs = [
    {q: "1"},
    {q: "1"},
    {q: "1"},
    {q: "1"}
  ]







}
