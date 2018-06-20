import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TourDetailsPage} from "../tour-details/tour-details";

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_details(id, tourId) {
    this.navCtrl.push(TourDetailsPage, {
      cardId: id,
      tourId: tourId
    })
  }

}
