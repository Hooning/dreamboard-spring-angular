import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {Board} from "../../../shared/board.model";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: []
})

export class BoardEditComponent{
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('categoryInput') categoryInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  @Output() boardCreated = new EventEmitter<Board>();

  onAddBoard() {
    // console.log('onAddBoard() called!');
    // this.board = new Board(
    //   this.nameInputRef.nativeElement.value,
    //   this.categoryInputRef.nativeElement.value,
    //   this.descriptionInputRef.nativeElement.value
    //   )
    const brdName = this.nameInputRef.nativeElement.value;
    const brdCategory = this.categoryInputRef.nativeElement.value;
    const brdDesc = this.descriptionInputRef.nativeElement.value;
    const newBoard = new Board(brdName, brdCategory, brdDesc);

    this.boardCreated.emit(
      newBoard
    );
  }
}
