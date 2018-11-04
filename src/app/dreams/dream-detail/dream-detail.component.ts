import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Dream } from "../dream.model";
import { DreamService } from "../dream.service";
import { Subscription } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-dream-detail',
  templateUrl: './dream-detail.component.html',
  styleUrls: ['./dream-detail.component.css']
})
export class DreamDetailComponent implements OnInit, OnDestroy {
  @Input() dream: Dream;

  @Input('rating') private rating: number;
  @Input('starCount') public starCount: number;
  @Input('color') color: string = "gold";
  @Output() private ratingUpdated = new EventEmitter();

  remainDays: number = 0;
  paramsSubscription: Subscription;
  private snackBarDuration: number = 2000;
  ratingArr = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dreamService: DreamService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {

    console.log(this.dream);

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          setTimeout(()=> {
            this.ratingArr = [];
            this.starCount = this.dream.importance;
            this.rating = this.dream.importance;

            for (let index = 0; index < this.starCount; index++) {
              this.ratingArr.push(index);
            }

            this.remainDays = this.dreamService.getRemainDays(this.dream.planDate);
          }, 0);
        }
      );
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
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
