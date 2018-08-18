import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: #009926;
    }
  `]
})
export class AppComponent {
  title = 'Angular world!';
  name = '';
}
