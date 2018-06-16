import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-arheo-detail',
  templateUrl: 'arheo-detail.html',
})
export class ArheoDetailPage {

  public cardId;
  public arheoTitle: string;
  public arheoText: string;
  public arheoImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardId = navParams.get("cardId");
    this.arheoTitle = 'ARHEO' + this.cardId + '_TITLE';
    this.arheoText = 'ARHEO' + this.cardId + '_TEXT';
    this.arheoImg = 'assets/imgs/arheo' + this.cardId + '_1.jpg'
  }

}
