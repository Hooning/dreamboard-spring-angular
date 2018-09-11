export class Dream {
  public dreamId: number;
  public boardId: number;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(dreamId:number, boardId:number, name: string, desc: string, imagePath: string){
    this.dreamId = dreamId;
    this.boardId = boardId;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
