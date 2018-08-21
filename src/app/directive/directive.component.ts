import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: [`
    .textColor {
      color: white;
    }
  `]
})
export class DirectiveComponent implements OnInit {
  paragraphShow = false;
  clickedLogs = [];

  constructor() {

  }

  ngOnInit() {
  }

  addParagraph(){
    this.paragraphShow = !this.paragraphShow;

    this.clickedLogs.push('[' + new Date() + '] index: [' + (this.clickedLogs.length + 1) + '] Clicked!');
    //this.clickedLogs.push(this.clickedLogs.length + 1);
  }

  getBgColor(){
    return this.clickedLogs.length > 4 ? 'blue' : 'none';
  }

}
