import {Dream} from "./dream.model";
import {EventEmitter} from "@angular/core";

export class DreamService {
  dreamSelected = new EventEmitter<Dream>();

  private dreams: Dream[] = [
    //Dummy data
    new Dream('Family Europe Travel', 'We will go more than 5 countries..', 'https://www.eturbonews.com/wp-content/uploads/2017/05/EUROPEtravel-696x492.jpg'),
    new Dream('Register Mobile App (iOS or Android)', 'Should learn Swift or Android..', 'https://dbcms.s3.amazonaws.com/devbridgecom/bcms/image/22d10840edda459883362150cf097441/team-app.jpg'),
    new Dream('Hobby for MTB', 'First I need to buy mountain bike..', 'https://static.f-mts.com/u0421/pics/great-mountain-bike-trails-in-val-venosta-413-1200x485-c-x50-y50.jpg')
  ];

  getDreams() {
    // Made a copy for using it from outside
    return this.dreams.slice();
  }
}
