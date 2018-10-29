export class Dream {
  public dreamId: number;
  public boardId: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public planDate: string;
  public currency: string;
  public estimatedCost: number;
  public achieved: boolean;
  public display: boolean;
  public importance: number;

  constructor(dreamId:number,
              boardId:number,
              name: string,
              desc: string,
              imagePath: string,
              planDate: string,
              currency: string,
              estimatedCost: number,
              achieved: boolean,
              display: boolean,
              importance: number){
    this.dreamId = dreamId;
    this.boardId = boardId;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.planDate = planDate;
    this.currency = currency;
    this.estimatedCost = estimatedCost;
    this.achieved = achieved;
    this.display = display;
    this.importance = importance;
  }
}
