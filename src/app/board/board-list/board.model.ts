export class Board {
  public boardId: number;
  public name: string;
  public category: string;
  public description: string;
  public registerdate: string;
  public updatedate: string;

  constructor(id: number, name: string, category: string, description: string, registerdate: string, updatedate: string){
    this.boardId = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.registerdate = registerdate;
    this.updatedate = updatedate;
  }
}
