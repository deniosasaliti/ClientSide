import {Component, Input, OnInit} from '@angular/core';
import {StarRatingComponent} from "ng-starrating";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-translate-card',
  templateUrl: './translate-card.component.html',
  styleUrls: ['./translate-card.component.css']
})
export class TranslateCardComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  @Input() studio_name="";
  @Input() siteList:Array<any>;

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }




  openWindowCustomClass(content:any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }





}
