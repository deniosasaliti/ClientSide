import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "@vime/angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {retry} from "rxjs/operators";



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
  constructor(private  http:HttpClient) {

  }
  displayCuesAfterTrackLoaded(trackElem:any, track:any) {
    // Create a listener that will be called only when the track has
    // been loaded
    trackElem.addEventListener('load', (e: Event) => {
      var k=0;
     var cues =  track.cues
      var array =[];
      for (let i =0; i< cues.length;i++){
       var text= cues[i].text.split(' ')

        if (i ==0){
          k=0;
        }else{

          k+=cues[i-1].text.split(' ').length;
          console.log("text.length"+ text.length)
        }
        var l= 0;
        for (let j = k; j<text.length+k;j++){

          console.log("j_is " + j)
          array[j] ="<" +text[l++] + ">";
        }


      }
      console.log(array)

      // this.translate(JSON.stringify(array)).subscribe(res=>console.log(res))

      console.log("load_Tracks_WithOut_Display");
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
  another_color_div:any
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


        //
        //         // for (let k =0; k< track.cues.length; k++){
        //         //   console.log(cues[k].text.split(' '))
        //         // }
        //       //   var stringArray = [
        //       //     "<this>",
        //       //     "<is>",
        //       //     "<true>"
        //       //
        //       //   ]
      //   var jsonObj = JSON.stringify(stringArray)
      //
      //
      //     console.log("jsonObj " + jsonObj)
      //
      // this.translate(jsonObj).subscribe((res)=>
      // console.log(res))




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
    let cues = track.cues;

    //append all the subtitle texts to
    for(let i=0; i < cues.length; i++) {
      let cue = cues[i];
      this.addCueListeners(cue);
    }
  }
  addCueListeners(cue:any) {

    var uniqueWolds1 = this.uniqueWolds;
    var that = this;

    var cueWordArray = cue.text.split(' ');
    cue.onenter = function(){

      console.log('enter id=' + cue.id);
      const video_overlays = document.getElementById('video_overlays');


      console.log(cueWordArray.length)


      for (let i=0; i < cueWordArray.length; i++){


        console.log("bbbbb"+ i)
        console.log(i)
        // @ts-ignore
        video_overlays.innerHTML += "<a class='cues' id="  + i +   ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"") + "</a>";
         // @ts-ignore
       let ss = document.getElementById(i+"")
        // @ts-ignore
         var nodes = video_overlays.childNodes;


        nodes.forEach((a,index)=>{
          a.addEventListener('click',()=>{
            // @ts-ignore
            let t = document.getElementById(index+"").innerHTML;

            // console.log( "index_is" + t);





            that.qwe(index+"");

          })
        });

        // for (let j = 0; j < nodes.length; j++) {
        //   nodes[j].addEventListener('click',()=>{
        //     console.log(j);
        //     this.qwe("s")
        //   })
        // }

        //   let el = childNodes[i]
        // // @ts-ignore
        // ss.addEventListener('click',()=>{
        //   console.log("sss")
        //
        //
        // })





        if (uniqueWolds1.has(cueWordArray[i].replaceAll(/[\p{P}]/gu,""))){
          // @ts-ignore
          console.log("has" + "  " + cueWordArray[i].replaceAll(/[\p{P}]/gu,""))
          // @ts-ignore
          // video_overlays.innerHTML += "<a class='cues' id=" + "h" + i +   ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"") + "</a>";
          // @ts-ignore
          var another_color_div = document.getElementById(i);

          // @ts-ignore
          another_color_div.style.color = "red"
          // @ts-ignore
          // another_color_div.addEventListener('click',()=>{
          //  console.log(  "asdasdasd")
          // })


        }
        else {


          // @ts-ignore
          // video_overlays.innerHTML +=  "<a class='cues' id=" + "h" + i + ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"") + "</a>";

          // // @ts-ignore
          // var ss = document.getElementById(i);
          // // @ts-ignore
          // ss.addEventListener('click',()=>{
          //   console.log("asdasdasd")
          // })


          // video_overlays.innerHTML += "<a class='cues' id=" + "h" + i +   ">" + cueWordArray[i].replaceAll(/[\p{P}]/gu,"") + "</a>";


          console.log("hasNot" + "  "+ cueWordArray[i].replaceAll(/[\p{P}]/gu,""))
        }





        // item.addEventListener('click',()=>{
        //   console.log("www");
        // })



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

    }

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
  someFunc() {

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

  ff():Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Hello, world!");
    encodedParams.append("target", "ru");
    encodedParams.append("source", "en");

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '8c4841be28msh86bbd599cddc4b8p1aa5cfjsne8ecb1bac1dd'
      },
      body: encodedParams
    };

   return  fetch(url, options)
      .then(res => res.text())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }




   translate(text:string): Observable<any>{




  let header = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '8c4841be28msh86bbd599cddc4b8p1aa5cfjsne8ecb1bac1dd',
  });
  const requestOptions = {headers: header};

   return   this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', {
     q: text,
     target: 'ru',
     source: 'en'
  })


}


    qwe(id:string){

      // // @ts-ignore
      // var t = document.getElementById(id).innerHTML;
      //
      // console.log(t)
      // @ts-ignore
    // this.translate(t).subscribe(result=>{
    //   console.log(result.data.translation)
    // })
      this.ff();
  }
  showOptions(s:string){
    console.log(s)

  }
  yy(){
    console.log("lllllllllllllllll");
  }


}
