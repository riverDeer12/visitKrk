import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fort-detail',
  templateUrl: 'fort-detail.html',
})
export class FortDetailPage {
  public cardId;
  public fortTitle: string;
  public fortText: string;
  public fortImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardId = navParams.get("cardId");
    this.fortTitle = 'FORT' + this.cardId + '_TITLE';
    this.fortText = 'FORT' + this.cardId + '_TEXT';
    this.fortImg = 'assets/imgs/fortress' + this.cardId + '_1.jpg'
  }

}
