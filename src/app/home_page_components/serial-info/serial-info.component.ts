import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {SlickItemDirective} from "ngx-slick-carousel/slick.component";
import {skipWhile} from "rxjs/operators";
import {interval, Observable, Subject} from "rxjs";
import {AudioTrackComponent} from "../../base_components/audio-track/audio-track.component";
// Default theme. ~960B
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../shared_services/httpService/auth.service";
import {SerialInfoModel} from "./serialInfoModel";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "@vime/angular";
import {FirstSharedService} from "../../shared_services/first-shared.service";



@Component({
  selector: 'app-serial-info',
  templateUrl: './serial-info.component.html',
  styleUrls: ['./serial-info.component.css']
})
export class SerialInfoComponent implements OnInit {

  // @ViewChild('audioTrackComponent', {static: false}) audioTrackComponent: AudioTrackComponent;
  @ViewChild('player') player!: Player;

  currentTime = 0;


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
  currentTrackAudio:any;
  serialModel:SerialInfoModel;

  constructor(private modalService: NgbModal,
              private authService:AuthService,
              private activatedRouter:ActivatedRoute,
              private router:Router,
              private sharedService:FirstSharedService,
              private firstSharedService:FirstSharedService) {

  }
  // changingValue: Subject<any> = new Subject();

  isPlay:boolean;
  sliderVal: number = 0;
  max:any;
  idInterval:any;



  slides: Array<any>;
  amvArray: Array<any>;






  ngOnInit(): void {
    this.amvArray = [
      {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAMK2Mn69JABK4q1QzqIk75icliSnFZmUBKdcU-UM8hattvSb-omdn16q_ozUA1fdqeA&usqp=CAU',name:''},
      {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPG6nkI0vugHF-TGrBjlBvULhfZVM649FEkORUviDp-TNoUJnV4MnxublmC2g9V72X-lE&usqp=CAU',name:''},
      {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyvF_j6NHA16A5izkF_frM5Q1NjWk7gJ8Y89yQKccN8ptP22xhRuUWoqEmJuaOHwz9Ao&usqp=CAU',name:''},
      {url:'',name:''},
      {url:'',name:''},
      {url:'',name:''}
    ]
    let id:number   =   this.activatedRouter.snapshot.params['id']
    this.firstSharedService.getAllSerialsById(id).subscribe(data=>{
      this.serialModel = data;
      this.slides =  this.serialModel.actors
      this.sharedService.subject.next(this.slides[0])

      console.log(this.serialModel.actors[0].serial[0].originalName)
      console.log(this.slides)
    })



  }
  setInterval(interval:any) {
    this.idInterval = interval;
  }
   isPlayT(audio:any){

    if (this.currentTrackAudio !=null && !this.currentTrackAudio.paused && !this.currentTrackAudio.ended && audio!=this.currentTrackAudio){

    this.stopC22()

    }
    this.currentTrackAudio = audio;


  }






  translate =[
    {studio:'Дубляж:',rating:'qweqwe'},
    {studio:'Lostfilm:',rating:'qweqwe'},
    {studio:'Babako:',rating:'qweqwe'},
    {studio:'force Media',rating:'qweqwe'},
    {studio:'Дубляж',rating:'qweqwe'},
    {studio:'Дубляж',rating:'qweqwe'},
    {studio:'Дубляж',rating:'qweqwe'}
  ];

  sites =[
    {name:'Funseria:',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'},
    {name:'HDRezka:',rating:'qweqwe',siteUrl:'https://rezka.ag/series/fantasy/45-igra-prestolov-2011.html'},
    {name:'dddd:',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'},
    {name:'force Media',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'},
    {name:'ggggg',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'},
    {name:'Дубggggляж',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'},
    {name:'gwwd',rating:'qweqwe',siteUrl:'http://myseria.pro/119-game-of-thrones-6/1-season.html'}
  ];


  audios = [
    {url:'assets/123.mp3',name:'qwe'},
    {url:'assets/333.mp3',name:'qwe2'},
    {url:'assets/Eminem.mp3',name:'qwe2'}
  ];


  // play() {
  //   this.currentTrackAudio.load();
  //   this.currentTrackAudio.currentTime = this.sliderVal;
  //   this.currentTrackAudio.play();
  //
  //
  //
  //
  //   this.isPlay = this.currentTrackAudio.played;
  //   this.timeUp(this.isPlay);
  //
  //
  //
  // }

  // changeTime(value:any){
  //   this.currentTrackAudio.currentTime = value;
  //
  // }
  slideConfig ={"slidesToShow": 4, "slidesToScroll": 2,"infinite": false,arrows: true};



  stopC22() {
    this.isPlay = false;
    this.sliderVal = Math.round(this.currentTrackAudio.currentTime*100/this.currentTrackAudio.duration);

    this.currentTrackAudio.pause();
    clearInterval(this.idInterval)
  }
  timeUp(isPlay:boolean){

    if (isPlay){

      this.idInterval = setInterval(() => {
        this.sliderVal++;
      }, 1000);

    }

  }
  openWindowCustomClass(content:any) {
    this.modalService.open(content, {  windowClass: 'dark-modal', size: 'lg',centered: true });
  }


  play2(event:any) {
    this.player.enterFullscreen();
  }


  slickInit(e:any) {
    console.log('slick initialized');

  }

  breakpoint(e:any) {

  }

  afterChange(e:any) {
    console.log('afterChange');


  }

  beforeChange(e:any) {
    console.log('beforeChange');

  }
}
