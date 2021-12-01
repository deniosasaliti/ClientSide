import {Component, Input, OnInit} from '@angular/core';
import {SerialComponent} from "../../base_components/serial/serial.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})
export class SerialsComponent implements OnInit {



  constructor(private router: Router) {

  }

    serials =[
      {"serialId": 1},
      {"serialId": 2},
      {"serialId": 3}

  ]


  ngOnInit(): void {

  }


  onClick(id:number) {
    this.router.navigateByUrl('/serials/'+id)
  }
}
