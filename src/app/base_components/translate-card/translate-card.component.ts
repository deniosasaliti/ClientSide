import {Component, Input, OnInit} from '@angular/core';
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-translate-card',
  templateUrl: './translate-card.component.html',
  styleUrls: ['./translate-card.component.css']
})
export class TranslateCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() studio_name="";

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
