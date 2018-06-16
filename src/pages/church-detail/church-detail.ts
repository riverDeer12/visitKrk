import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-church-detail',
  templateUrl: 'church-detail.html',
})
export class ChurchDetailPage {
  public cardId;
  public churchTitle: string;
  public churchText: string;
  public churchImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardId = navParams.get("cardId");
    this.churchTitle = 'CHURCH' + this.cardId + '_TITLE';
    this.churchText = 'CHURCH' + this.cardId + '_TEXT';
    this.churchImg = 'assets/imgs/church' + this.cardId + '_1.jpg'
  }
}
