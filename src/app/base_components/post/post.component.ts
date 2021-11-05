import {Component, Injectable, Input, OnInit} from '@angular/core';
import {PostModel} from "./post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {


   @Input()
   post:PostModel = new PostModel();

  constructor() {

  }



  ngOnInit(): void {

  }



}
