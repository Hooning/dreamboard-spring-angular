import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardListComponent } from "./board/board-list/board-list.component";
import { DreamsComponent } from "./dreams/dreams.component";

import { HomeComponent } from "./home/home.component";
import { DreamsResolver} from "./dreams/dreams-resolver.service";
import { DreamDetailComponent } from "./dreams/dream-detail/dream-detail.component";
import { DreamResolver } from "./dreams/dream-resolver.service";

const appRoutes: Routes = [
  // {path: '', redirectTo: 'boards', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'boards', component: BoardListComponent },
  { path: 'boards/:boardId/dreams',
    component: DreamsComponent,
    resolve: { dreams: DreamsResolver },
    // children: [
    //   { path: ':dreamId',
    //     component: DreamDetailComponent,
    //     resolve: { dream: DreamResolver}}
    // ]
  },
  { path: 'boards/:boardId/dreams/:dreamId',
    component: DreamsComponent,
    resolve: { dreams: DreamsResolver, dream: DreamResolver }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
