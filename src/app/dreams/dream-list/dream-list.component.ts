import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";

import { Dream } from "../dream.model";
import { DreamService } from "../dream.service";

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {
  dreams: Dream[];
  boardId: number;

  constructor(private dreamService: DreamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.route.data
    //   .subscribe(
    //     (data: Data) => {
    //       this.dreams = data['dreams'];
    //     }
    //   );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.boardId = params['boardId'];
          this.dreams = this.dreamService.getDreams(+this.boardId);
          // console.log('this.dreams: ' + this.dreams);
        }
      );
  }

  // <!--[routerLink] = "['/boards', dreams[0].boardId, 'dreams', 'new']"-->
  onNewDream() {
    this.router.navigate(['/boards', this.boardId, 'dreams', 'new']);
  }

}
