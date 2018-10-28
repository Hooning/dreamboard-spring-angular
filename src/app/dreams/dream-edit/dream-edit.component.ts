import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
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

    if ( this.editMode ) {
      const dream = this.dreamService.getDream(this.boardId, this.dreamId);
      dreamName = dream.name;
      imagePath = dream.imagePath;
      description = dream.description;
      planDate = dream.planDate;
      currency = dream.currency;
      estimatedCost = dream.estimatedCost;
    }

    this.dreamForm = new FormGroup({
      'name': new FormControl(dreamName),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'planDate': new FormControl(planDate),
      'currency': new FormControl(currency),
      'estimatedCost': new FormControl(estimatedCost)
    });
  }

}
