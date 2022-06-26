import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirstSharedService} from "../../shared_services/first-shared.service";
import {SerialModel} from "./serial.model";


@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {

  @ViewChild('wrapName') wrapName:ElementRef
  @ViewChild('wrap') wrap:ElementRef
  @ViewChild('wrapImage') wrapImage:ElementRef


  // @Input()  serialId:number;
  @Input() serialModel:SerialModel;

  constructor(private activateRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.serialId = this.activateRoute.snapshot.params.id;

  }


  onCardWrapMouseOver(){

    let wrapName = this.wrapName.nativeElement;
      wrapName.style.color ="orange"
      wrapName.style.textDecoration = 'underline';
      this.wrapImage.nativeElement.style.filter = 'brightness(50%)'


  }


  onCardWrapMouseLeave() {

    let wrapName = this.wrapName.nativeElement;
      wrapName.style.color ="black"
      wrapName.style.textDecoration = 'none';
      this.wrapImage.nativeElement.style.filter = 'brightness(100%)'

  }
}
