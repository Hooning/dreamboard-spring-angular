import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators }  from "@angular/forms";
import { DreamService } from "../dream.service";

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

  constructor(private route: ActivatedRoute,
              private dreamService: DreamService) {

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
  }

  onSubmit() {
    console.log(this.dreamForm);
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

}
