import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  open_website(index){
    let websites = [];
    websites[0] = 'http://www.krk.hr/';
    websites[1] = 'http://www.kvarner.hr/turizam';
    websites[2] = 'https://www.croatia.hr/hr-HR';
    websites[3] = 'https://www.uniri.hr/index.php?lang=hr';
    websites[4] = 'http://cib.uniri.hr/';

    this.iab.create(websites[index]);
  }

}
