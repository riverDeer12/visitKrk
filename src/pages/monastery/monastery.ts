import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DetailsPage} from "../details/details";

@IonicPage()
@Component({
  selector: 'page-monastery',
  templateUrl: 'monastery.html',
})
export class MonasteryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_details(id) {
    this.navCtrl.push(DetailsPage, {
      cardId: id
    })
  }

}
