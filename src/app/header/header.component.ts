import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  @ViewChild('homeMenu') homeMenu: ElementRef;
  @ViewChild('boardMenu') boardMenu: ElementRef;
  dreamActive: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  ngDoCheck() {
    if( this.homeMenu.nativeElement.className !== 'active' &&
      this.boardMenu.nativeElement.className !== 'active'){
      this.dreamActive = true;
    } else {
      this.dreamActive = false;
    }
  }


}
