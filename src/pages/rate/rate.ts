import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AppRate } from "@ionic-native/app-rate";

@IonicPage()
@Component({
  selector: "page-rate",
  templateUrl: "rate.html"
})
export class RatePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appRate: AppRate,
  ) {

    this.appRate.preferences = {
      displayAppName: "Visit Krk",
      usesUntilPrompt: 4,
      promptAgainForEachNewVersion: true,
      storeAppURL: {
        ios:'',
        android:''
      }
    }

    this.appRate.promptForRating(true);

  }
}
