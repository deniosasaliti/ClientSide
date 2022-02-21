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
    var videoControls = document.getElementById('video-controls');
    var videoWorks = !!document.createElement('video').canPlayType;
    var fullscreen = document.getElementById('full-screen');
    var slider = document.getElementById("seek-bar")
    var volume_bar = document.getElementById('volume-bar');
    // @ts-ignore
    fullscreen.addEventListener('click',()=>this.makeFullscreen())


    // @ts-ignore
    var min = slider.min
    // @ts-ignore
    var max = slider.max
    var ttt = document.getElementById('ttt');

    // @ts-ignore
    var max_volume = volume_bar.max
    // @ts-ignore
    var min_volume = volume_bar.min

    // @ts-ignore
    volume_bar.style.background = 'url(assets/images/kk6.png) center center   no-repeat'
    // @ts-ignore
    ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`


    // @ts-ignore
    volume_bar.addEventListener('input',()=>{
      // @ts-ignore
      video.volume = volume_bar.value
      // @ts-ignore
      ttt.style.background =`linear-gradient(to right, white ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%, gray ${(volume_bar.value-min_volume)/(max_volume-min_volume)*100}%)`

    })

    // slider.style.background = `linear-gradient(to right, #202020 ${(slider.value-min)/(max-min)*100}%,gray ${(slider.value-min)/(max-min)*100}%)`

    // @ts-ignore
    slider.style.background = `linear-gradient(to right, #202020 ${(slider.value-min)/(max-min)*100}%,gray ${(slider.value-min)/(max-min)*100}%)`
    // @ts-ignore
    slider.addEventListener('input',()=>{
      // @ts-ignore
      slider.style.background = `linear-gradient(to right, #202020 ${(slider.value-min)/(max-min)*100}%,gray ${(slider.value-min)/(max-min)*100}%)`
        // @ts-ignore

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
      // @ts-ignore
    })
    // @ts-ignore
    slider.addEventListener('input',()=>{
      // @ts-ignore
      video.currentTime = video.duration * (slider.value / 100);
      // @ts-ignore
    })



    var play_pause = document.getElementById("play-pause");
    var video_container = document.getElementById('video-container')
    var controls= document.getElementById('video-controls');
    // @ts-ignore
    controls.hidden = false

    // @ts-ignore
    play_pause.addEventListener('click',()=>{
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

    })
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

          // var cue = cues;
          // // this.addCueListeners(cue);
          //
          // var transText = cue.text;
          // var clickableTransText = "<li class='cues' id=" + cue.id + " onclick='jumpTo(" + cue.startTime + ");'" + ">" + transText + "</li>";


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
    cue.onenter = function(){
      console.log('enter id=' + cue.id);
      var transcriptText = document.getElementById(cue.id);
       var qwe = document.getElementById('video_overlays');


         // @ts-ignore
      qwe.innerHTML = cue.text;

      // @ts-ignore
      // transcriptText.innerHTML = '1';

      // transcriptText.classList.add("current");

    };

    cue.onexit = function(){
      console.log('exit id=' + cue.id);
      var transcriptText = document.getElementById(cue.id);
      // transcriptText.classList.remove("current");
      var qwe = document.getElementById('video_overlays');
      // @ts-ignore
      qwe.innerHTML = "";
    };
  }

   makeFullscreen() {
    var video = document.getElementById("video-container");



     // @ts-ignore
     if (!document.fullscreenElement) {
       // @ts-ignore
       video.requestFullscreen();
     } else {
       if (document.exitFullscreen) {
         document.exitFullscreen();
       }
     }
  }


  qweqwe() {

      this.player.play()


  }



}
