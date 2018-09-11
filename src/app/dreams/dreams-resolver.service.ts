import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { DreamService } from "./dream.service";

interface Dream {
  dreamId: number;
  boardId: number;
  name: string;
  description: string;
  imagePath: string;
}

@Injectable()
export class DreamsResolver implements Resolve<Dream[]>{
  constructor(private dreamService: DreamService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable <Dream[]> | Promise <Dream[]> | Dream[] {
    return this.dreamService.getDreams(+route.params['boardId']);
  }

}
