import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirstSharedService} from "../../shared_services/first-shared.service";
import {SerialModel} from "./serial.model";


@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {


  // @Input()  serialId:number;
  @Input() serialModel:SerialModel;

  constructor(private activateRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.serialId = this.activateRoute.snapshot.params.id;
  }



}
