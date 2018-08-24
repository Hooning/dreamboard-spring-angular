import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardEditComponent } from "./board/board-list/board-edit/board-edit.component";
import { DreamListComponent } from './dream/dream-list/dream-list.component';
import { DreamItemComponent } from './dream/dream-list/dream-item/dream-item.component';
import { DreamDetailComponent } from './dream/dream-detail/dream-detail.component';
import { DreamComponent } from './dream/dream.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardEditComponent,
    DreamListComponent,
    DreamItemComponent,
    DreamDetailComponent,
    DreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
