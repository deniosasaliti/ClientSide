import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {JSXBase} from "@vime/core/dist/types/stencil-public-runtime";
import ButtonHTMLAttributes = JSXBase.ButtonHTMLAttributes;
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input() actor_url:string;
  @Input() actor_name:string;
  isUrlPresent:boolean= true
  isModerate:boolean;
  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.isUrlPresent =  this.actor_url !=null
    this.isModerate = true;



  }

  onClick(content:any) {
    this.modalService.open(content, {  windowClass: 'dark-modal', size: 'm',centered: true });
  }
}
