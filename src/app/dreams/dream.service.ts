import { Dream } from "./dream.model";

export class DreamService {
  selectedDreams: Dream[];
  selectedDream: Dream;

  private dreams: Dream[] = [
    //Dummy data
    new Dream(1,1,'Family Europe Travel', 'We will go more than 5 countries..', 'https://www.eturbonews.com/wp-content/uploads/2017/05/EUROPEtravel-696x492.jpg', '2019-05-01','€',5000, false, true, 4),
    new Dream(1,2,'Register Mobile App (iOS or Android)', 'Should learn Swift or Android..', 'https://dbcms.s3.amazonaws.com/devbridgecom/bcms/image/22d10840edda459883362150cf097441/team-app.jpg','2021-12-01','€',50, false, true, 3),
    new Dream(2,1,'Hobby for MTB', 'First I need to buy mountain bike..', 'https://static.f-mts.com/u0421/pics/great-mountain-bike-trails-in-val-venosta-413-1200x485-c-x50-y50.jpg','2020-04-01','$',500, false, true, 2)
  ];

  // Need to find a better way
  now = new Date();

  // getDreams() {
  //   // Made a copy for using it from outside
  //   return this.dreams.slice();
  // }

  getDreams(boardId: number) {
    this.selectedDreams = this.dreams.slice().filter(
      (d) => {
        return d.boardId === boardId
      }
    );

    return this.selectedDreams;
  }

  getDream(boardId: number, dreamId: number) {
    let dreams = this.selectedDreams.slice();

    this.selectedDream = dreams.filter(
      (d) => {
        return d.boardId === boardId && d.dreamId === dreamId;
      }
    )[0];

    return this.selectedDream;
  }

  getRemainDays(planDate: string) {
    let remainDays = 0;

    planDate = planDate.replace('-', '');

    let planningDate = new Date(
      parseInt(planDate.substring(0,4)),
      parseInt(planDate.substring(4,6))-1,
      parseInt(planDate.substring(6,8))
    )

    remainDays = planningDate.getTime() - this.now.getTime();
    remainDays = Math.floor( remainDays / (24*60*60*1000));

    return remainDays;
  }
}
