import { Component, OnInit } from '@angular/core';
import {Dream} from "../dream.model";

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {
  dreams: Dream[] = [
    //Dummy data
    new Dream('Family Europe Travel', 'We will go more than 5 countries..', 'https://www.eturbonews.com/wp-content/uploads/2017/05/EUROPEtravel-696x492.jpg'),
    new Dream('Register Mobile App (iOS or Android)', 'Should learn Swift or Android..', 'https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/t/59f8615171c10b4aeacc3eff/1509450069152/ios-android.png?format=300w'),
    new Dream('Hobby for MTB', 'First I need to buy mountain bike..', 'https://static.f-mts.com/u0421/pics/great-mountain-bike-trails-in-val-venosta-413-1200x485-c-x50-y50.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
