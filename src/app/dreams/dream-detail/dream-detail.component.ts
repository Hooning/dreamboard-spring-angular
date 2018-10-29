import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

import { Dream } from "../dream.model";
import { DreamService } from "../dream.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-dream-detail',
  templateUrl: './dream-detail.component.html',
  styleUrls: ['./dream-detail.component.css']
})
export class DreamDetailComponent implements OnInit, OnDestroy {
  @Input() dream: Dream;
  remainDays: number = 0;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dreamService: DreamService) { }

  ngOnInit() {

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          setTimeout(()=> {
            this.remainDays = this.dreamService.getRemainDays(this.dream.planDate);
          }, 0);
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  // [routerLink] = "['/boards', dream.boardId, 'dreams', dream.dreamId, 'edit']"
  onEditDream() {
    this.router.navigate([
      '/boards', this.dream.boardId, 'dreams', this.dream.dreamId, 'edit'
    ])
  }

}
