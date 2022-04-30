import {Component, Input, OnInit} from '@angular/core';
import {SerialComponent} from "../../base_components/serial/serial.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FirstSharedService} from "../../shared_services/first-shared.service";
import {SerialModel} from "../../base_components/serial/serial.model";

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})
export class SerialsComponent implements OnInit {



  constructor(private router: Router,private sharedService:FirstSharedService) {

  }

    serials:Array<SerialModel>


  ngOnInit(): void {
    this.sharedService.getAllSerials().subscribe(data=>{
      this.serials = data;
    })
  }


  onClick(id:number) {
    this.router.navigateByUrl('/serials/' +id)
  }
}
