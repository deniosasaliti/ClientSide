import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../shared_services/httpService/auth.service";
import {FirstSharedService} from "../../shared_services/first-shared.service";
import {Observable} from "rxjs";
import {startWith} from "rxjs/operators";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean
  userId:number

  document: Document | { doc: string; id: string };

  documents = []


  constructor(private modalService: NgbModal,
              private authService:AuthService,
              private firstAuthService:FirstSharedService) {

  }

  ngOnInit(): void {
     this.authService.authBehaviorSubject.subscribe(data=>{
      this.isLogin = data.isLogin

    })

  }


  openModal(content:any) {
    this.modalService.open(content, {  windowClass: 'dark-modal', size: 'lg',centered: true });
  }

  logout(){
    this.authService.logout()
  }
}
