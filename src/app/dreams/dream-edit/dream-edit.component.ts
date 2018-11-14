import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormControl, FormGroup, Validators }  from "@angular/forms";
import { DreamService } from "../dream.service";
import { Dream } from "../dream.model";
import { Subscription } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-dream-edit',
  templateUrl: './dream-edit.component.html',
  styleUrls: ['./dream-edit.component.css']
})
export class DreamEditComponent implements OnInit {
  boardId: number;
  dreamId: number;
  editMode: boolean;
  dreamForm: FormGroup;
  paramsSubscription: Subscription;

  @Input('rating') public rating: number;
  @Input('starCount') public starCount: number;
  @Input('color') color: string = StarRatingColor.primary;
  @Output() ratingUpdated = new EventEmitter<number>();

  private snackBarDuration: number = 1000;
  ratingArr = [];

  constructor(private route: ActivatedRoute,
              private dreamService: DreamService,
              private router: Router,
              private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.boardId = +params['boardId'];
          this.dreamId = +params['dreamId'];
          this.editMode = params['dreamId'] != null;
          this.initForm();
        }
      );

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          setTimeout(()=> {
            this.ratingArr = [];
            this.starCount = 5;

            for (let index = 0; index < this.starCount; index++) {
              this.ratingArr.push(index);
            }

          }, 0);
        }
      );
  }

  onSubmit() {
    const newDream = new Dream(
        this.dreamId,
        this.boardId,
        this.dreamForm.value['name'],
        this.dreamForm.value['description'],
        this.dreamForm.value['imagePath'],
        this.dreamForm.value['planDate'],
        this.dreamForm.value['currency'],
        this.dreamForm.value['estimatedCost'],
        this.dreamForm.value['achieved'],
        this.dreamForm.value['display'],
        this.dreamForm.value['importance'] = this.rating
      );

    if (this.editMode) {
      this.dreamService.updateDream(this.boardId, this.dreamId, newDream);
    }else{
      newDream.dreamId = this.dreamService.getNextDreamId(this.boardId);
      this.dreamService.addDream(this.boardId, newDream);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let dreamName = '';
    let imagePath = '';
    let description = '';
    let planDate = '';
    let currency = '';
    let estimatedCost = 0;
    let achieved;
    let display;
    let importance = 0;
    this.rating = 0;

    if ( this.editMode ) {
      const dream = this.dreamService.getDream(this.boardId, this.dreamId);
      dreamName = dream.name;
      imagePath = dream.imagePath;
      description = dream.description;
      planDate = dream.planDate;
      currency = dream.currency;
      estimatedCost = dream.estimatedCost;
      achieved = dream.achieved;
      display = dream.display;
      importance = dream.importance;
      this.rating = dream.importance;

    }

    this.dreamForm = new FormGroup({
      'name': new FormControl(dreamName, Validators.required),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'planDate': new FormControl(planDate, Validators.required),
      'currency': new FormControl(currency, Validators.required),
      'estimatedCost': new FormControl(estimatedCost, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
      'achieved': new FormControl(achieved, Validators.required),
      'display': new FormControl(display, Validators.required),
      'importance': new FormControl(importance, Validators.required)
    });
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick( rating: number ) {
    this.rating = rating;
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(this.rating);
    return false;
  }
}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
