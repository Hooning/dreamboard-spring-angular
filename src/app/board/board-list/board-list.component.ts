import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Board } from './board.model';
import { BoardService } from "../board.service";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  private subscription: Subscription;

  constructor(private boardService: BoardService,
              private router: Router) { }

  ngOnInit() {
    this.boards = this.boardService.getBoards();

    this.subscription = this.boardService.boardChanged
      .subscribe(
      (boards: Board[]) => {
        this.boards = boards;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBoardDelete(boardId: number) {
    console.log("onBoardDelete() : " + boardId );
  }

}
