import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Board } from "../board.model";
import { BoardService } from "../../board.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})

export class BoardEditComponent implements OnInit, OnDestroy{
  @ViewChild('boardForm') boardForm : NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Board;

  inputToggle = false;
  categories = ['General','Life','Item','Study','Travel'];
  defaultCategory = 'General';

  // Need to find a better way
  now = new Date();
  currentDate = this.now.getFullYear() + '-' +
                ('0' + (this.now.getMonth()+1)).slice(-2) + '-' +
                ('0' + this.now.getDate()).slice(-2);

  constructor(private boardService: BoardService) {

  }

  ngOnInit() {
    this.subscription = this.boardService.startedEditing
      .subscribe(
        (boardId: number) => {
          if ( !this.inputToggle ) {
            this.inputToggle = true;
          }

          setTimeout(()=> {
            this.editedItemId = boardId;
            this.editMode = true;
            this.editedItem = this.boardService.getBoard(boardId);
            
            this.boardForm.setValue({
              name: this.editedItem.name,
              category: this.editedItem.category,
              description: this.editedItem.description
            });
            },1);
        }
      );
  }

  onSubmit() {

    const newBoard = new Board(
      this.boardService.getNextBoardId(),
      this.boardForm.value.name,
      this.boardForm.value.category,
      this.boardForm.value.description,
      this.currentDate,
      this.currentDate
    );

    this.boardService.addBoard(newBoard);

  }

  onToggleInput() {
    if ( !this.inputToggle ) {
      this.inputToggle = !this.inputToggle;
    }
    this.editMode = false;

    this.onFormReset(this.boardForm);
  }

  onFormReset(form: NgForm) {
    form.reset({
      category : this.defaultCategory
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
