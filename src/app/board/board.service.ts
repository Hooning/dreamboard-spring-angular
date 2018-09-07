import { Board } from "./board-list/board.model";
import { EventEmitter } from "@angular/core";

export class BoardService {
  boardChanged = new EventEmitter<Board[]>()

  private boards: Board[] = [
    new Board(1,"Hoon's Refresh board", 'Life', 'Dreams for enjoying my life'),
    new Board(2, "Hoon's Career board", 'IT', 'Dreams for being better Programmer')
  ];

  getBoards() {
    return this.boards.slice();
  }

  addBoard(board: Board) {
    this.boards.push(board);
    this.boardChanged.emit(this.boards.slice());
  }
}
