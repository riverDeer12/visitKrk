import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArheoDetailPage} from "../arheo-detail/arheo-detail";

@IonicPage()
@Component({
  selector: 'page-arheo',
  templateUrl: 'arheo.html',
})
export class ArheoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_arheo(id){
    this.navCtrl.push(ArheoDetailPage,{
      cardId: id
    })
  }

}
