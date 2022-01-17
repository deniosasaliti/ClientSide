import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrls: ['./audio-track.component.css']
})
export class AudioTrackComponent implements OnInit {
  @Input() trackUrl = '';
  @Input() trackName = '';
  @Output() isTrackPlay = new EventEmitter<any>();
  @Output() trackIntervalId = new EventEmitter<any>();
  @Input() changing: Subject<any>;

   isPlay:boolean = false;
  play1:any;


    audio:any;
  constructor() {

  }




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

    this.sliderVal = this.audio.currentTime;

      this.audio.pause();
      this.isPlay = false;


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
