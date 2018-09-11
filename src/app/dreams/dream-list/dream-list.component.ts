import { Component, OnInit } from '@angular/core';
import { Dream } from "../dream.model";
import { DreamService } from "../dream.service";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {
  dreams: Dream[];

  constructor(private dreamService: DreamService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.dreams = data['dreams'];
        }
      );
  }

}
