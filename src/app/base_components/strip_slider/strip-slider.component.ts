import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SlickCarouselComponent, SlickCarouselModule} from 'ngx-slick-carousel';
import {PostComponent} from "../post/post.component";
import {ActorCardComponent} from "../actor-card/actor-card.component";


@Component({
  selector: 'app-strip-slider',
  templateUrl: './strip-slider.component.html',
  styleUrls: ['./strip-slider.component.css']
})
export class StripSliderComponent implements OnInit {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  color="blue";
  visibleNext = 'visible';
  visiblePrev = 'hidden';
  currentElement = 8;
  next() {
    this.visiblePrev='visible';
    this.currentElement+=8;
    this.slickModal.slickNext();
    if (this.currentElement>=this.slides.length){
      this.visibleNext='hidden';
    }

  }

  prev() {
    this.visibleNext='visible';
    this.currentElement-=8;
    this.slickModal.slickPrev();
    if (this.currentElement<=8){
      this.visiblePrev='hidden';
    }
  }




  // slides = [
  //   {img: "https://via.placeholder.com/600.png/09f/fff"},
  //   {img: "https://via.placeholder.com/600.png/021/fff"},
  //   {img: "https://via.placeholder.com/600.png/321/fff"},
  //   {img: "https://via.placeholder.com/600.png/422/fff"},
  //   {img: "https://via.placeholder.com/600.png/654/fff"}
  // ];
  slides:ActorCardComponent[]= [

    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent(),
    new ActorCardComponent()

  ];



  slideConfig = {"slidesToShow": 8, "slidesToScroll": 8,"infinite": false,arrows: false};


  addSlide() {

  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    console.log('slick initialized');

  }

  breakpoint(e:any) {

  }

  afterChange(e:any) {
    console.log('afterChange');


  }

  beforeChange(e:any) {
    console.log('beforeChange');

  }


  constructor() {}



  ngOnInit(): void {
  }


}
