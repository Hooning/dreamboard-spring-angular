import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Dream } from "../dream.model";

@Component({
  selector: 'app-dream-detail',
  templateUrl: './dream-detail.component.html',
  styleUrls: ['./dream-detail.component.css']
})
export class DreamDetailComponent implements OnInit {
  @Input() dream: Dream;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

  }

  // [routerLink] = "['/boards', dream.boardId, 'dreams', dream.dreamId, 'edit']"
  onEditDream() {
    this.router.navigate([
      '/boards', this.dream.boardId, 'dreams', this.dream.dreamId, 'edit'
    ])
  }

}
