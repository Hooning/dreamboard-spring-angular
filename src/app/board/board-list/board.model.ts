import {Dream} from "../../dreams/dream.model";

export class Board {
  public boardId: number;
  public name: string;
  public category: string;
  public description: string;

  constructor(id: number, name: string, category: string, description: string){
    this.boardId = id;
    this.name = name;
    this.category = category;
    this.description = description;
  }
}
