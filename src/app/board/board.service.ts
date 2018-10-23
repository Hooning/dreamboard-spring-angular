import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Board } from "./board-list/board.model";
import { Subject } from "rxjs/Rx";

@Injectable()
export class BoardService {
  boardChanged = new EventEmitter<Board[]>()
  startedEditing = new Subject<number>();
  clearEditing = new Subject<number>();

  private boards: Board[] = [
    new Board(1,"Hoon's Refresh board", 'Life', 'Dreams for enjoying my life', '2018-03-01', '2018-05-12'),
    new Board(2, "Hoon's Career board", 'Study', 'Dreams for being better Programmer', '2018-07-03', '2018-09-16')
  ];

  constructor(private router: Router) {}

  getBoards() {
    return this.boards.slice();
  }

  getBoard(boardId: number) {
    return this.boards.find(
      (board) => {
        return board.boardId === boardId;
      }
    );
  }

  // get Max boardId + 1
  getNextBoardId = () => {
    const boards = this.boards.slice();

    if( this.boards.length == 0) {
      return 1;
    }else{
      return boards
        .reduce((max, b) => b.boardId > max ? b.boardId : max, boards[0].boardId) + 1;
    }

  }

  addBoard(board: Board) {
    this.boards.push(board);
    this.boardChanged.emit(this.boards.slice());
  }

  updateBoard(boardId: number, newBoard: Board) {
    var inx = 0;

    this.boards.forEach(
      function(board, index) {
        if ( board.boardId === boardId ) {
          inx = index;
        }
    });

    this.boards.splice(inx, 1, newBoard);

    this.boardChanged.next(this.boards.slice());

  }

  deleteBoard(boardId: number) {
    var inx = 0;

    this.boards.forEach(
      function ( board, index) {
        if (board.boardId == boardId) {
          inx = index;
        }
      }
    );

    this.boards.splice(inx, 1);
    this.boardChanged.next(this.boards.slice());

  }

}
