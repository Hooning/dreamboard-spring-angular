import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  displayBoardList: boolean = false;
  displayDream: boolean = false;

  constructor() {

  }

  onNavigate(menu: string) {
    console.log("[" + menu + "] Menu clicked!");
    if (menu === 'boardList') {
      this.displayBoardList = true;
      this.displayDream = false;
    }else{
      this.displayDream = true;
      this.displayBoardList = false;
    }
  }

}
