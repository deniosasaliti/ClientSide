import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-translate-slider',
  templateUrl: './translate-slider.component.html',
  styleUrls: ['./translate-slider.component.css']
})
export class TranslateSliderComponent implements OnInit {

  constructor() { }

  @Input()
  slides:Array<any>;
  @Input()
  serialList:Array<any>;


  ngOnInit(): void {
  }
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3,"infinite": false,arrows: true,
    centerMode:false};

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
}
