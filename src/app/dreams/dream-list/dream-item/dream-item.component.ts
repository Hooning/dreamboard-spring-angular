import { Component, Input, OnInit } from '@angular/core';
import { DreamService } from "../../dream.service";

@Component({
  selector: 'app-dream-item',
  templateUrl: './dream-item.component.html',
  styleUrls: ['./dream-item.component.css']
})
export class DreamItemComponent implements OnInit {
  @Input() dreamInfo;

  constructor(private dreamService: DreamService) {

  }

  ngOnInit() {
    
  }

  onSelected() {
    this.dreamService.dreamSelected.emit(this.dreamInfo);
  }

}
