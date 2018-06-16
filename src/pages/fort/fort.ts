import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FortDetailPage} from "../fort-detail/fort-detail";

@IonicPage()
@Component({
  selector: 'page-fort',
  templateUrl: 'fort.html',
})
export class FortPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show_fort(id){
    this.navCtrl.push(FortDetailPage,{
      cardId: id
    })
  }

}
