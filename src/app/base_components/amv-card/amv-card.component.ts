import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-amv-card',
  templateUrl: './amv-card.component.html',
  styleUrls: ['./amv-card.component.css']
})
export class AmvCardComponent implements OnInit {

  @ViewChild('avmImage') avmImage:ElementRef
  @ViewChild('avmName') avmName:ElementRef
  @ViewChild('playImage') playImage:ElementRef

  @Input() avmUrl:string;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseWrapOver() {
    this.avmImage.nativeElement.style.filter = 'brightness(35%)'
    this.avmName.nativeElement.style.color = 'green'
    this.playImage.nativeElement.style.visibility = 'visible'
  }

  onMouseWrapLeave() {
    this.avmImage.nativeElement.style.filter = 'brightness(100%)'
    this.avmName.nativeElement.style.color = 'white'
    this.playImage.nativeElement.style.visibility = 'hidden'
  }
}
