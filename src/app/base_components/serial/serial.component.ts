import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {


  @Input()  serialId:number;

  constructor(private activateRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.serialId = this.activateRoute.snapshot.params.id;
  }



}
