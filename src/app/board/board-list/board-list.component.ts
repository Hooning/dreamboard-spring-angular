import { Component, OnInit } from '@angular/core';
import { Board } from '../../shared/board.model';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[] = [
    new Board("Hoon's Refresh board", 'Life', 'Dreams for enjoying my life'),
    new Board("Hoon's Career board", 'IT', 'Dreams for being better Programmer')
  ];

  constructor() { }

  ngOnInit() {
  }

}
