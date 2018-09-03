import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-dream-item',
  templateUrl: './dream-item.component.html',
  styleUrls: ['./dream-item.component.css']
})
export class DreamItemComponent implements OnInit {
  @Input() dreamInfo;
  @Output() showItemDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onItemClick() {
    this.showItemDetail.emit();
  }

}
