import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-dream-edit',
  templateUrl: './dream-edit.component.html',
  styleUrls: ['./dream-edit.component.css']
})
export class DreamEditComponent implements OnInit {
  dreamId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}

}
