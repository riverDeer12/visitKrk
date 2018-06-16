import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {
  public cardId;
  public placeTitle: string;
  public placeText: string;
  public placeImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardId = navParams.get("cardId");
    this.placeTitle = 'PLACE' + this.cardId + '_TITLE';
    this.placeText = 'PLACE' + this.cardId + '_TEXT';
    this.placeImg = 'assets/imgs/town' + this.cardId + '_1.jpg'
  }


}
