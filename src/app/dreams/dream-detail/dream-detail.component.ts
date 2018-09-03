import {Component, Input, OnInit} from '@angular/core';
import {Dream} from "../dream.model";

@Component({
  selector: 'app-dream-detail',
  templateUrl: './dream-detail.component.html',
  styleUrls: ['./dream-detail.component.css']
})
export class DreamDetailComponent implements OnInit {
  @Input() dream: Dream;

  constructor() { }

  ngOnInit() {
  }

}
