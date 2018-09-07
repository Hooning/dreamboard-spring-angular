import { Component, OnInit } from '@angular/core';
import { Dream } from "../dream.model";
import { DreamService } from "../dream.service";

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {
  dreams: Dream[];

  constructor(private dreamService: DreamService) { }

  ngOnInit() {
    this.dreams = this.dreamService.getDreams();
  }

}
