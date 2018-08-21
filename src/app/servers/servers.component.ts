import { Component, OnInit } from '@angular/core';

  @Component({
    // if the inline html code exceed 3 lines you better use external (templateUrl)
// [#1] get it from tag Name
  selector: 'app-servers',
// [#2] get it from attribute name
// selector: '[app-servers]',
// [#3] get it from class value
// selector: '.app-servers',
//   template: `
//     <app-server></app-server>
//     <app-server></app-server>
//     <!--<div app-success-alert></div>-->
//     <!--<app-warningAlert></app-warningAlert>-->
//   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = '';
  allowUserReset = false;
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'A new server was created! Server name is '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUsernameInput(){
    if( this.username == null || this.username == ''){
      this.allowUserReset = false;
    }else{
      this.allowUserReset = true;
    }
  }

  resetUsername(){
    this.username = '';
    this.allowUserReset = false;
  }

}
