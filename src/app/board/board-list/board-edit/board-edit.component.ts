import { Component, ViewChild } from "@angular/core";
import { Board } from "../board.model";
import { BoardService } from "../../board.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})

export class BoardEditComponent{
  @ViewChild('boardForm') boardForm : NgForm;

  newInputToggle = false;
  categories = ['General','Life','Item','Study','Travel'];
  defaultCategory = 'General';

  board = {
    'boardId': 0,
    'boardName': '',
    'boardCategory': '',
    'boardDescription':''
  }

  constructor(private boardService: BoardService) {

  }

  onSubmit() {
    this.board.boardId = this.boardService.getNextBoardId();
    this.board.boardName = this.boardForm.value.name;
    this.board.boardCategory = this.boardForm.value.category;
    this.board.boardDescription = this.boardForm.value.description;

    const newBoard = new Board(
      this.board.boardId,
      this.board.boardName,
      this.board.boardCategory,
      this.board.boardDescription
    );

    this.boardService.addBoard(newBoard);

  }

  onToggleInput() {
    this.newInputToggle = !this.newInputToggle;
  }

  onFormReset(form: NgForm) {
    form.reset({
      category : this.defaultCategory
    });

  }

}
