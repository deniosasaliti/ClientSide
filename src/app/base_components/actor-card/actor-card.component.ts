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
  @ViewChild('wrapImage') wrapImage:ElementRef
  @ViewChild('actorName') actorName:ElementRef
  @ViewChild('actorInfoButton') actorInfoButton:ElementRef
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

  onWrapMouseOver() {
    this.actorInfoButton.nativeElement.style.visibility = 'visible'
    this.wrapImage.nativeElement.style.filter = 'brightness(20%)'
    this.actorName.nativeElement.style.color = 'green'
    this.actorName.nativeElement.style.textDecoration = 'underline'

  }

  onWrapMouseLeave() {
    this.actorInfoButton.nativeElement.style.visibility = 'hidden'
    this.wrapImage.nativeElement.style.filter = 'brightness(100%)'
    this.actorName.nativeElement.style.color = 'white'
    this.actorName.nativeElement.style.textDecoration = 'none'
  }
}
