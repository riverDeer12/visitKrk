import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  public bodyText;
  public subjectText;
  public recipientEmail;

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
    this.socialSharing.share('Island of Krk Cultural Heritage', '', 'https://itunes.apple.com/us/app/candy-crush-saga/id553834731?mt=8', 'https://itunes.apple.com/us/app/candy-crush-saga/id553834731?mt=8').then(() => {
      console.log("Shared successfully");
    }).catch((error) => {
      // Error!
      console.log(error);
    });
  }

}
