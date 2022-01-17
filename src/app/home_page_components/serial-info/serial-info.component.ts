import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {SlickItemDirective} from "ngx-slick-carousel/slick.component";
import {skipWhile} from "rxjs/operators";
import {interval, Subject} from "rxjs";
import {AudioTrackComponent} from "../../base_components/audio-track/audio-track.component";
// Default theme. ~960B
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-serial-info',
  templateUrl: './serial-info.component.html',
  styleUrls: ['./serial-info.component.css']
})
export class SerialInfoComponent implements OnInit {

  // @ViewChild('audioTrackComponent', {static: false}) audioTrackComponent: AudioTrackComponent;

  currentTrackAudio:any;

  constructor(private modalService: NgbModal) {}
  changingValue: Subject<any> = new Subject();

  isPlay:boolean;
  sliderVal: number = 0;
  max:any;
  idInterval:any;
  playingAudio:any;

  trailerLink = 'https://www.youtube.com/watch?v=YLCKYTKlPU0&list=RDYLCKYTKlPU0&start_radio=1';

  ngOnInit(): void {
  }
  setInterval(interval:any) {
    this.idInterval = interval;
  }
  isPlayT(audio:any){

    if (this.currentTrackAudio !=null && this.currentTrackAudio.played){

    this.stopC22()

    }
    this.currentTrackAudio = audio;


  }
  // anyMethod(): void {
  //   this.audioTrackComponent.stopC() // updateData is a child method
  // }

  someStringName:any = "ss"
  slides  = [
    {name:'Emilia Clarke',url:'data:image/jpeg;base64,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'},
    {name: 'Kit Harington',url: 'data:image/jpeg;base64,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'},
    {name: 'Sophie Turner',url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOe5k1v-tyaRy4SnuVqfW86-ghzl1I381lCLNYb9_1GKGT7qD'},
    {name: 'Maisie Williams',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Maisie_Williams_by_Gage_Skidmore_3.jpg/1200px-Maisie_Williams_by_Gage_Skidmore_3.jpg'},
    {name: 'Peter Dinklage',url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzl4mhljpgw-Qk7QIfvyMIEIkBz7v76x8AvUYSdMWAgB7ADOYj'},
    {name: 'Lena Headey',url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xnloQlMubeJqIv_sNYEUNZJq0m7sZi6e5mjcilFXo9o7asGa'},
    {name: 'Nikolaj Coster-Waldau',url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2w7-VqW81sjtjeJ4cTxAgkyVWAqNS109vmDmE39I-H3JlRw9o'},
    {name: '',url: ''},
    {name: '',url: ''},
    {name: '',url: ''},
    {name: '',url: ''}
  ];

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
    {url:'assets/333.mp3',name:'qwe2'}
  ];


  play() {
    this.currentTrackAudio.load();
    this.currentTrackAudio.currentTime = this.sliderVal;
    this.currentTrackAudio.play();




    this.isPlay = this.currentTrackAudio.played;
    this.timeUp(this.isPlay);



  }

  changeTime(value:any){
    this.currentTrackAudio.currentTime = value;

  }


  stopC22() {
    this.isPlay = false;
    this.sliderVal = this.currentTrackAudio.currentTime;
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


}
