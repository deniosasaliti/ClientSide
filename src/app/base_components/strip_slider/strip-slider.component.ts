import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SlickCarouselComponent, SlickCarouselModule} from 'ngx-slick-carousel';
import {PostComponent} from "../post/post.component";
import {ActorCardComponent} from "../actor-card/actor-card.component";
import {Container} from "angular-responsive-carousel/lib/container";
import {FirstSharedService} from "../../shared_services/first-shared.service";


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
  // next() {
  //   this.visiblePrev='visible';
  //   this.currentElement+=8;
  //   this.slickModal.slickNext();
  //   if (this.currentElement>=this.slides.length){
  //     this.visibleNext='hidden';
  //   }
  //
  // }

  // prev() {
  //   this.visibleNext='visible';
  //   this.currentElement-=8;
  //   this.slickModal.slickPrev();
  //   if (this.currentElement<=8){
  //     this.visiblePrev='hidden';
  //   }
  // }

    @Input()
    slides:Array<any>;







  slideConfig = {"slidesToShow": 6, "slidesToScroll": 3,"infinite": false,arrows: true};


  addSlide() {

  }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

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


  constructor(private sharedService:FirstSharedService) {

  }



  ngOnInit(): void {

  }


  onClick(slide:any) {
      this.sharedService.subject.next(slide)
    console.log(slide.name)
  }
}
