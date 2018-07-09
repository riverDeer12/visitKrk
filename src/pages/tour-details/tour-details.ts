import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html',
})
export class TourDetailsPage {
  public cardId;
  public tourId;
  public tourTitle;
  public tourText;
  public tourImg;
  public locationCounter = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.cardId = navParams.get("cardId");
    this.tourId = navParams.get("tourId");
    this.tourTitle = this.cardId + "_TITLE";
    this.tourText = this.cardId + "_TEXT";
    this.tourImg = "assets/imgs/" + this.cardId + "_1.jpg";
  }

  show_tour(){
    let tour_links = [];
    tour_links[0] = 'https://www.google.com/maps/d/u/0/viewer?hl=en&hl=en&mid=1fqyKxf602KThsP8_xm936VhcBFhZduyS&ll=45.04913144399149%2C14.669200000000046&z=11';
    tour_links[1] = '';
    tour_links[2] = '';
    tour_links[3] = '';
    tour_links[4] = '';
    this.iab.create(tour_links[this.tourId]);
  }

}
