import { Component, OnInit } from '@angular/core';
import { Dream } from "./dream.model";
import { DreamService } from "./dream.service";

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
  selectedDream: Dream;

  constructor(private dreamService: DreamService) { }

  ngOnInit() {
    this.dreamService.dreamSelected.subscribe(
      (dream: Dream) => {
        this.selectedDream = dream;
      }
    );

  }

}
