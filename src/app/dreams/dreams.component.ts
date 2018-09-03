import { Component, OnInit } from '@angular/core';
import {Dream} from "./dream.model";

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
  selectedDream: Dream;

  constructor() { }

  ngOnInit() {
  }

}
