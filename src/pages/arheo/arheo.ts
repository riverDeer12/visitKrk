import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from "../details/details";

@IonicPage()
@Component({
  selector: 'page-arheo',
  templateUrl: 'arheo.html',
})
export class ArheoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_details(id){
    this.navCtrl.push(DetailsPage,{
      cardId: id
    })
  }

}
