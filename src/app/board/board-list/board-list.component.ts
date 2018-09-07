import { Component, OnInit } from '@angular/core';
import { Board } from './board.model';
import { BoardService } from "../board.service";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boards = this.boardService.getBoards();

    this.boardService.boardChanged.subscribe(
      (boards: Board[]) => {
        this.boards = boards;
      }
    );
  }

}
