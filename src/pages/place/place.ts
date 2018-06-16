import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlaceDetailPage} from "../place-detail/place-detail";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_place(id) {
    this.navCtrl.push(PlaceDetailPage, {
      cardId: id
    })
  }

}
