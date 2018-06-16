import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MonasteryDetailPage} from "../monastery-detail/monastery-detail";

/**
 * Generated class for the MonasteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monastery',
  templateUrl: 'monastery.html',
})
export class MonasteryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_monastery(id) {
    this.navCtrl.push(MonasteryDetailPage, {
      cardId: id
    })
  }

}
