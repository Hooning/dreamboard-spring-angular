import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardEditComponent } from "./board/board-list/board-edit/board-edit.component";
import { DreamListComponent } from './dreams/dream-list/dream-list.component';
import { DreamItemComponent } from './dreams/dream-list/dream-item/dream-item.component';
import { DreamDetailComponent } from './dreams/dream-detail/dream-detail.component';
import { DreamsComponent } from './dreams/dreams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardEditComponent,
    DreamListComponent,
    DreamItemComponent,
    DreamDetailComponent,
    DreamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
