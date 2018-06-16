import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-monastery-detail',
  templateUrl: 'monastery-detail.html',
})
export class MonasteryDetailPage {
  public cardId;
  public monasteryTitle: string;
  public monasteryText: string;
  public monasteryImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardId = navParams.get("cardId");
    this.monasteryTitle = 'MONASTERY' + this.cardId + '_TITLE';
    this.monasteryText = 'MONASTERY' + this.cardId + '_TEXT';
    this.monasteryImg = 'assets/imgs/monastery' + this.cardId + '_1.jpg'
  }

}
