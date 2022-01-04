import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrls: ['./audio-track.component.css']
})
export class AudioTrackComponent implements OnInit {
  @Input() trackUrl = '';
  @Output() isTrackPlay = new EventEmitter<any>();
  @Output() trackIntervalId = new EventEmitter<any>();
  @Input() changing: Subject<any>;
  play1:any;


    audio:any;
  constructor() {

  }



  isPlay:boolean = false;
  sliderVal: number = 0;
  max:any;
  idInterval:any;
  playingAudio:any;



  ngOnInit(): void {

  }

  play() {
       this.audio = new Audio(this.trackUrl)
       this.audio.load();

      this.audio.currentTime = this.sliderVal;
       this.play1 = this.audio.play();






    this.isPlay = this.audio.played;
    this.timeUp(this.isPlay);



  }

  changeTime(value:any){
    this.audio.currentTime = value;

  }


  stopC() {
    this.isPlay = this.audio.played;
    this.sliderVal = this.audio.currentTime;
    if (this.play1 !== undefined) {
      this.audio.pause();
    }

    clearInterval(this.idInterval)
  }
  timeUp(isPlay:boolean){

    if (isPlay){

      this.idInterval = setInterval(() => {
        this.sliderVal++;
      }, 1000);

    }

  }

}
