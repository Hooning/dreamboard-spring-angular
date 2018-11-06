import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormControl, FormGroup, Validators }  from "@angular/forms";
import { DreamService } from "../dream.service";
import { Dream } from "../dream.model";

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
              private dreamService: DreamService,
              private router: Router ) {

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
        this.dreamForm.value['importance']
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
