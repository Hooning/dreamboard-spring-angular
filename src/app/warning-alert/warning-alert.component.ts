import { Component } from '@angular/core';

@Component({
  selector: 'app-warningAlert',
  // templateUrl: './warning-alert.component.html',
  template: `
    <p>This is the Warning, you are in danger!</p>
  `,
  styles: [`
    p{
      padding: 10px;
      color: white;
      background-color: red;
      border: solid;
      border-color: darkred;
    }
  `]

})

export class WarningAlertComponent{

}
