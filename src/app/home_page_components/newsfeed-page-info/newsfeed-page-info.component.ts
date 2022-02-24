import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "@vime/angular";
// const logo = require('src/assets/images/stick.png').default as string;
@Component({
  selector: 'app-newsfeed-page-info',
  templateUrl: './newsfeed-page-info.component.html',
  styleUrls: ['./newsfeed-page-info.component.css']
})
export class NewsfeedPageInfoComponent implements OnInit {

  @ViewChild('player') player!: Player;
  currentTime = 0;
  elem: any;
  promise:Promise<void> = new Promise<void>(()=>{

  })

  // fsEventHandler: any = this.onFullscreenChange.bind(this);

  // Example function to showcase updating property.
  seekForward() {
    this.currentTime += 5;
  }

  // Example function to showcase calling player method.
  enterFullscreen() {
    this.player.enterFullscreen();
  }

  onTimeUpdate(event:any) {
    this.currentTime = event.detail;

  }

  onFullscreenChange(event:any) {
    const isFullscreen = event.fullscreenElement.requestFullscreen();
    // ...
  }
  constructor() {
    // let trackElems = document.querySelectorAll("track");
    //
    // for(var i = 0; i < trackElems.length; i++) {
    //
    //   var currentTrackElem = trackElems[i];
    //   this.tracksURLs[i] = currentTrackElem.src;
    //
    // }
  }
  displayCuesAfterTrackLoaded(trackElem:any, track:any) {
    // Create a listener that will be called only when the track has
    // been loaded
    trackElem.addEventListener('load', (e: Event) => {
      console.log("track loaded");
     this.loadTracksWithOutDisplay(track);
    });
  }



  // @ViewChild('myVideo') video: ElementRef;
  // @ViewChild('transcript') transcriptDiv: ElementRef;
  // @ViewChild('track') trackElems: ElementRef;
  // @ViewChild('buttonEnglish') buttonEnglish: ElementRef;
  // @ViewChild('buttonDeutsch') buttonDeutsch: ElementRef;
  transcriptDiv: any;
  video: any
  tracks: any
  textqwe:HTMLElement
  trackElems = [];

  ngOnInit(): void {

    this.loadTranscript("en")
    var video = document.getElementById('myVideo')
    this.video.controls = false;
    var fullscreen = document.getElementById('full-screen');
    var slider = document.getElementById("seek-bar")
    var volume_bar = document.getElementById('volume-bar');
    var mute_button = document.getElementById("mute");
    var video_container = document.getElementById("video-container");

    // @ts-ignore
    fullscreen.addEventListener('click',()=>this.makeFullscreen())

    // @ts-ignore
    video.addEventListener('click',()=>this.play_or_pause())
    // @ts-ignore
    video.addEventListener('dblclick',()=>this.makeFullscreen())

    // @ts-ignore
    var min = slider.min
    // @ts-ignore
    var max = slider.max
    var ttt = document.getElementById('ttt');

    // @ts-ignore
    var max_volume = volume_bar.max
    // @ts-ignore
    var min_volume = volume_bar.min
    var is_change_scrolled:boolean;

    // @ts-ignore
    ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`





    // @ts-ignore
    volume_bar.addEventListener('input',()=>{
      // @ts-ignore
      video.volume = volume_bar.value
      // @ts-ignore
      ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`



      // @ts-ignore
      if (volume_bar.value < 0.15){
        // @ts-ignore
        mute_button.innerHTML = '<i class="fa fa-volume-mute"></i>'
        // @ts-ignore
        video.volume = 0;
        // @ts-ignore
        video.muted = true;
         is_change_scrolled = true;


      }else { // @ts-ignore
        if (volume_bar.value < 0.5){
                // @ts-ignore
                mute_button.innerHTML = '<i class="fa fa-volume-down"></i>'
              } else {
                        // @ts-ignore
                        mute_button.innerHTML = '<i class="fa fa-volume-up"></i>';


        }
      }

    })




    // @ts-ignore
    slider.style.background = `linear-gradient(to right, #202020 ${(slider.value-min)/(max-min)*100}%,gray ${(slider.value-min)/(max-min)*100}%)`
    // @ts-ignore
    slider.addEventListener('input',()=>{
      // @ts-ignore
      slider.style.background = `linear-gradient(to right, #202020 ${(slider.value-min)/(max-min)*100}%,gray ${(slider.value-min)/(max-min)*100}%)`
    })
    // @ts-ignore
    mute_button.addEventListener('click',()=>{

      // @ts-ignore
      if (video.muted){
        // @ts-ignore
        video.muted = false;
        // @ts-ignore
        mute_button.innerHTML = '<i class="fa fa-volume-up"></i>'
        // @ts-ignore
        ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`
        if (is_change_scrolled){
          is_change_scrolled = false;
          // @ts-ignore
          video.volume=0.5
          // @ts-ignore
          volume_bar.value = 0.5
          // @ts-ignore
          ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`
        }
        else {
          // @ts-ignore
          ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`
        }
         }else {

        // @ts-ignore
        video.muted = true;
        // @ts-ignore
        mute_button.innerHTML = '<i class="fa fa-volume-mute"></i>'
        // @ts-ignore
        ttt.style.background ='grey';
      }
    })
    // @ts-ignore
    video.addEventListener('timeupdate',()=>{
          // @ts-ignore
          slider.style.background = `linear-gradient(to right, #202020 ${Math.round((video.currentTime * 100)/video.duration)}%,gray ${Math.round((video.currentTime * 100)/video.duration)}%)`
          // @ts-ignore
      console.log(Math.round((video.currentTime * 100)/video.duration))
    })

    // @ts-ignore
    slider.addEventListener('change',()=>{
      // @ts-ignore
      video.currentTime = video.duration * (slider.value / 100);
    })
    // @ts-ignore
    slider.addEventListener('input',()=>{
      // @ts-ignore
      video.currentTime = video.duration * (slider.value / 100);

    })



    var play_pause = document.getElementById("play-pause");
    var controls= document.getElementById('video-controls');
    // @ts-ignore
    controls.hidden = false

    // @ts-ignore
    play_pause.addEventListener('click',()=>this.play_or_pause());
    // @ts-ignore
    video_container.addEventListener('mouseout',()=>{
      // @ts-ignore
      controls.hidden = !video.paused;
    })
    // @ts-ignore
    video_container.addEventListener("mouseover", ()=>{
      // @ts-ignore
      controls.hidden = false;
    })



  }

   uniqueWolds:Set<string> = new Set(['Proog','Emo']);

  lastNews = [
    {q: "1"},
    {q: "1"},
    {q: "1"},
    {q: "1"}
  ]

  Paragraphs = [
    {q: "1"},
    {q: "1"},
    {q: "1"},
    {q: "1"}
  ]
   onFullScreen() {
     var elem = document.getElementById("video_box");
     // @ts-ignore
     elem.webkitRequestFullscreen();
  }

  loadTranscript(lang: string) {

    this.transcriptDiv = document.getElementById('transcript');
    this.video = document.getElementById('myVideo');
    var trackElems = document.querySelectorAll("track");
    var tracks = this.video.textTracks;






    alert(this.video.textTracks.length)
    alert("tracks.L_is"+ tracks.length)
    for (var i = 0; i < tracks.length; i++) {
      // current track
      var track = tracks[i];

      if (track.language === lang){
        track.mode="hidden";


        var trackAsHtmlElem = trackElems[i];
        var cues = track.cues;

        //append all the subtitle texts to
        if(trackAsHtmlElem.readyState === 2) {
          this.displayCues(track)
        }
        else {
          this.displayCuesAfterTrackLoaded(trackAsHtmlElem,track)
        }
      }
    }
  }



   displayCues(track: any) {

      var cues = track.cues;

      //append all the subtitle texts to
      for(var i=0; i < cues.length; i++) {
        var cue = cues[i];
       this.addCueListeners(cue);


        var transText="";

        transText = cue.text; // not a voice text
        var clickableTransText = "<li class='cues' id=" + cue.id +  " onclick='jumpTo(" + cue.startTime + ");'" + ">" + transText + "</li>";

        this.transcriptDiv.innerHTML += clickableTransText;
      }

  }
  loadTracksWithOutDisplay(track:any){
    var cues = track.cues;

    //append all the subtitle texts to
    for(var i=0; i < cues.length; i++) {
      var cue = cues[i];
      this.addCueListeners(cue);
    }
  }
  addCueListeners(cue:any) {
    var uniqueWolds1 = this.uniqueWolds;
    cue.onenter = function(){
      console.log('enter id=' + cue.id);
      var transcriptText = document.getElementById(cue.id);
       var video_overlays = document.getElementById('video_overlays');


      var cueWordArray = cue.text.split(' ');
      for (var i=0; i < cueWordArray.length; i++){
        if (uniqueWolds1.has(cueWordArray[i].replaceAll(/[\p{P}]/gu,"").replaceAll('<vProog>',"").replaceAll('<v>',"").replaceAll('<v',"").replaceAll('Proog>',"").replaceAll('Emo>',""))){
          // @ts-ignore
          video_overlays.style.color = 'red';
          console.log("has" + "  " + cueWordArray[i].replaceAll(/[\p{P}]/gu,"").trimLeft('<').replaceAll('<v>',"").replaceAll('<v',"").replaceAll('Proog>',"").replaceAll('Emo>',""))
          // @ts-ignore
          video_overlays.innerHTML += "<a class='cues' id=" + i +  " onclick='showOptions(" + i + ");'" + ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"").trimLeft('<').replaceAll('<v>',"").replaceAll('<v',"").replaceAll('Proog>',"").replaceAll('Emo>',"") + "</a>" +" ";
          // @ts-ignore
          var another_color_div = document.getElementById(i).style.color = "red";
        }
        else {
          // @ts-ignore
          video_overlays.innerHTML +=  "<a class='cues' id=" + i +  " onclick='showOptions(" + i + ");'" + ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"").trimLeft('<').replaceAll('<v>',"").replaceAll('<v',"").replaceAll('Proog>',"").replaceAll('Emo>',"") + "</a>" +" ";

          console.log("hasNot" + "  "+ cueWordArray[i].replaceAll(/[\p{P}]/gu,"").trimLeft('<').replaceAll('<v>',"").replaceAll('<v',"").replaceAll('Proog>',"").replaceAll('Emo>',""))
        }
        // @ts-ignore
      }


         // @ts-ignore
      // video_overlays.innerHTML = cue.text;

      // @ts-ignore
      // transcriptText.innerHTML = '1';

      // transcriptText.classList.add("current");

    };

    cue.onexit = function(){
      console.log('exit id=' + cue.id);
      var transcriptText = document.getElementById(cue.id);
      // transcriptText.classList.remove("current");
      var video_overlays = document.getElementById('video_overlays');
      // @ts-ignore
      video_overlays.style.color = 'white';
      // @ts-ignore
      video_overlays.innerHTML = "";
    };
  }

   makeFullscreen() {
    var video = document.getElementById("video-container");
    var full_screen = document.getElementById('full-screen');
     // @ts-ignore
     if (!document.fullscreenElement) {
       // @ts-ignore
       video.requestFullscreen();
       // @ts-ignore
       full_screen.innerHTML = '<i class="fa fa-compress"></i>';
     } else {
       if (document.exitFullscreen) {
         // @ts-ignore
         full_screen.innerHTML ='<i  class="fa fa-expand"></i>';
         document.exitFullscreen();
       }
     }
  }

  play_or_pause(){

    var video = document.getElementById("myVideo")
    var play_pause = document.getElementById("play-pause")
    // @ts-ignore
    if (video.paused)
    { // @ts-ignore
      video.play();
      // @ts-ignore
      play_pause.innerHTML = '<i class="fas fa-pause"></i>'
    }else {
      // @ts-ignore
      video.pause();
      // @ts-ignore
      play_pause.innerHTML = '<i  class="fas fa-play"></i>'
    }
  }

  ff():Promise<string> {
    return new Promise<string>(a=>{
        return   a+"";
      })


  }






}
