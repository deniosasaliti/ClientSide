import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {Player} from "@vime/angular";

@Component({
  selector: 'app-audio-track',
  templateUrl: './audio-track.component.html',
  styleUrls: ['./audio-track.component.css']
})
export class AudioTrackComponent implements  OnInit{

  @Input() trackUrl = '';
  @Input() trackName = '';
  @Output() isTrackPlay = new EventEmitter<any>();
  @Output() trackIntervalId = new EventEmitter<any>();
  @Input() changing: Subject<any>;
  @ViewChild('input') input!: Input;





   isPlay:boolean = false;
    isSome:boolean;
    play1:any;
   audio:any


    audioDuration:any

  constructor() {


  }




  sliderVal: number=0;

  idInterval:any;
  playingAudio:any;




  ngOnInit(): void {
    this.audio = new Audio(this.trackUrl)

    // this.audio = new Audio(this.trackUrl)






    // // @ts-ignore
    // var min = sl[0].min
    // // @ts-ignore
    // var max = sl[0].max
    //
    // // @ts-ignore
    // sl[0].addEventListener('input',()=>{
    //   // @ts-ignore
    //   sl[0].style.background = `linear-gradient(to right, #202020 ${(sl[0].value-min)/(max-min)*100}%,gray ${(sl[0].value-min)/(max-min)*100}%)`
    //   console.log("min "+ min)
    //   console.log('max ' + max)
    // })


    // this.audio.addEventListener('timeupdate',()=>{
    //   // @ts-ignore
    //   slider.style.background = `linear-gradient(to right, #202020 ${Math.round((this.audio.currentTime * 100)/video.duration)}%,gray ${Math.round((this.audio.currentTime * 100)/this.audio.duration)}%)`
    //   // @ts-ignore
    //   console.log(Math.round((video.currentTime * 100)/video.duration))
    // })
  }

  playQ() {

    if (this.audio.ended){
        clearInterval(this.idInterval)
        this.sliderVal =0;
    }


      // @ts-ignore

      this.isPlay = true;
      this.play1 = this.audio.play();





    // console.log(this.play1 +' this.play1_before')
    //
    //
    // console.log(this.play1 +' this.play1_after')
    // console.log(this.audio.paused +' isPaused')




    // if (this.audio.paused){
    //   // @ts-ignore
    //     this.audio.currentTime = Math.round(297*this.input.nativeElement.value/100);
    //
    // }
    // @ts-ignore
    //   this.audio.currentTime = Math.round(297*this.input.nativeElement.value/100);
    // this.play1 = this.audio.play();










    this.audioDuration = Math.round(this.audio.duration);
    var sl = document.getElementsByClassName('bar');


      // @ts-ignore
      let min = this.input.nativeElement.min
      // @ts-ignore
      let max = this.input.nativeElement.max




      // // @ts-ignore
      // sl[i].addEventListener('input',()=>{
      //   // @ts-ignore
      //   sl[i].style.background = `linear-gradient(to right, #202020 ${Math.round((sl[i].value*100/this.audio.duration))}%,gray ${Math.round((sl[i].value*100/this.audio.duration))}%)`
      //   console.log("min "+ min)
      //   console.log('max ' + max)
      //   // console.log('sliderVal ' + this.sliderVal)
      //   // console.log('audioDuration ' + this.audio.duration)
      //   // @ts-ignore
      //   console.log('input_is  ' + this.input.nativeElement.value)
      // })



      // @ts-ignore
      this.input.nativeElement.addEventListener('input',()=>{
        // @ts-ignore
        this.input.nativeElement.style.background = `linear-gradient(to right, #202020 ${Math.round(this.input.nativeElement.value)}%,green ${Math.round(this.input.nativeElement.value)}%)`
        console.log("min "+ min)
        console.log('max ' + max)
        // console.log('sliderVal ' + this.sliderVal)
        // console.log('audioDuration ' + this.audio.duration)
        // @ts-ignore
        console.log('input_is  ' + this.input.nativeElement.value)
      })


      this.audio.addEventListener('timeupdate',()=>{

        // @ts-ignore
        // sl[i].style.background = `linear-gradient(to right, #202020 ${Math.round((this.audio.currentTime * 100)/this.audio.duration)}%,gray ${Math.round((this.audio.currentTime * 100)/this.audio.duration)}%)`
        this.input.nativeElement.style.background = `linear-gradient(to right, #202020 ${Math.round(this.input.nativeElement.value)}%,green ${Math.round(this.input.nativeElement.value)}%)`

        console.log('currTimeIs  '+  this.audio.currentTime)
        console.log('this.audio.duration  '+  this.audio.duration)



      })



    // this.audio.addEventListener('timeupdate',()=>{
    //   // @ts-ignore
    //   let min = sl.min
    //   // @ts-ignore
    //   let max = sl.max
    //
    //   // @ts-ignore
    //   // sl.style.background = `linear-gradient(to right, #202020 ${(sl.value-min)/(max-min)*100}%,gray ${(sl.value-min)/(max-min)*100}%)`
    //   sl.style.background = `linear-gradient(to right, #202020 ${Math.round((this.audio.currentTime * 100)/this.audio.duration)}%,gray ${Math.round((this.audio.currentTime * 100)/this.audio.duration)}%)`
    //
    // })

    // this.audio.currentTime = this.sliderVal;
    // if (this.audio !=null){
    //    // @ts-ignore
    //   this.audio.currentTime = Math.round(this.audio.duration*this.input.nativeElement.value/100);
    //   // this.audio.currentTime = Math.round(this.audio.duration*this.sliderVal/100);
    //
    // }


    // this.audio.currentTime = this.input.nativeElement.value;



    // setTimeout(()=> {
    //   this.audio.load()
    //   this.play1 = this.audio.play();
    // }, 0);

    // @ts-ignore
    //   this.audio.currentTime = Math.round(297*this.input.nativeElement.value/100);




    // this.isPlay = this.audio.isPlaying;
    this.timeUp(this.isPlay);








  }

  changeTime(value:any){
    this.audio.currentTime = value*this.audio.duration/100;
    // this.audio.currentTime = value

  }


  stopC() {
    // this.isPlay = false;
    // @ts-ignore
    // this.sliderVal = Math.round(this.audio.currentTime*100/this.input.nativeElement.value);

    // this.sliderVal = this.audio.currentTime

        console.log('SSSSSSSSSSSSSSSSSSSSSSS')

              if (this.play1!=undefined) {
                this.play1.then(()=>{
                  this.isPlay = false;
                  this.audio.pause();
                  clearInterval(this.idInterval)
                })
              }





      // this.audio.pause();
      // this.isPlay = false;



  }
  timeUp(isPlay:boolean){
    // let dur = this.audio.duration
    // if (this.audio.duration==null){
    //   dur = 297
    // }


    if (isPlay){

      this.idInterval = setInterval(() => {
        this.sliderVal++;
      }, Math.round(this.audio.duration*10));

    }

  }

}
