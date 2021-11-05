import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {PostComponent} from "../../base_components/post/post.component";
import {PostModel} from "../../base_components/post/post.model";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {





    first:PostComponent = new PostComponent();
    second:PostComponent = new PostComponent();



   @Input() posts:PostComponent[]= [
     this.first,
     this.second,
     new PostComponent(),
     new PostComponent(),
     new PostComponent(),
     new PostComponent()

   ];


  constructor() {


  }

  ngOnInit(): void {
    this.first.post.postId=1;
    this.second.post.postId=2;
  }

}
