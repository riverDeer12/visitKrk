import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChurchDetailPage} from "../church-detail/church-detail";

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

  show_church(id){
    console.log("Redirected to church " + id);
    this.navCtrl.push(ChurchDetailPage,{
      cardId: id
    })
  }

}
