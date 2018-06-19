import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from "../details/details";

/**
 * Generated class for the ChurchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-church',
  templateUrl: 'church.html',
})
export class ChurchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_details(id){
    this.navCtrl.push(DetailsPage,{
      cardId: id
    })
  }

}
