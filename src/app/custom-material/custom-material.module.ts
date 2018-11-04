import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
