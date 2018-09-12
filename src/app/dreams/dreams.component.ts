import { Component, OnInit } from '@angular/core';
import { Dream } from "./dream.model";
import { DreamService } from "./dream.service";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
  selectedDream: Dream;

  constructor(private dreamService: DreamService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.selectedDream = data['dream'];
        }
      );

  }

}
