import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Board } from "./board-list/board.model";

@Injectable()
export class BoardService {
  boardChanged = new EventEmitter<Board[]>()

  private boards: Board[] = [
    new Board(1,"Hoon's Refresh board", 'Life', 'Dreams for enjoying my life'),
    new Board(2, "Hoon's Career board", 'IT', 'Dreams for being better Programmer')
  ];

  constructor(private router: Router) {}

  getBoards() {
    return this.boards.slice();
  }

  // get Max boardId + 1
  getNextBoardId = () => {
    const boards = this.boards.slice();

    return boards
      .reduce((max, b) => b.boardId > max ? b.boardId : max, boards[0].boardId) + 1;
  }

  addBoard(board: Board) {
    this.boards.push(board);
    this.boardChanged.emit(this.boards.slice());
  }

}
