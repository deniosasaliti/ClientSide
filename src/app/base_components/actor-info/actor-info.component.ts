import {Component, Input, OnInit} from '@angular/core';
import {FirstSharedService} from "../../shared_services/first-shared.service";

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  constructor(private sharedService:FirstSharedService) { }

    name:any;
    short_about_actor:any
    alma_mater:any;
    serials:Array<any>;
    awards:Array<any>;
    serialList2:Array<any>

  ngOnInit(): void {
    this.sharedService.subject.subscribe(slider=>{
      this.name = slider.name;
      this.short_about_actor = slider.shortAboutActor;
      this.alma_mater = slider.almaMater;
      this.serials = slider.serials;
      this.awards = slider.awards
      this.serialList2 = slider.serial

      console.log(this.awards)

    })
  }

}
