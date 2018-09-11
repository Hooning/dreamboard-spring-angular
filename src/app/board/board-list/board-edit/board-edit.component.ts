import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {Board} from "../board.model";
import {BoardService} from "../../board.service";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: []
})

export class BoardEditComponent{
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('categoryInput') categoryInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;


  constructor(private boardService: BoardService) {

  }

  onAddBoard() {
    // console.log('onAddBoard() called!');
    // this.board = new Board(
    //   this.nameInputRef.nativeElement.value,
    //   this.categoryInputRef.nativeElement.value,
    //   this.descriptionInputRef.nativeElement.value
    //   )
    const brdId = this.boardService.getNextBoardId();
    const brdName = this.nameInputRef.nativeElement.value;
    const brdCategory = this.categoryInputRef.nativeElement.value;
    const brdDesc = this.descriptionInputRef.nativeElement.value;
    const newBoard = new Board(brdId, brdName, brdCategory, brdDesc);

    this.boardService.addBoard(newBoard);

  }
}
