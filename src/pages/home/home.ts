import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { HistoryPage } from '../history/history';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  lang: any;
  constructor(public navCtrl: NavController,public translate: TranslateService) {
    this.lang = "en";
    this.translate.setDefaultLang("en");
    this.translate.use("en");
  }

  switch_language() {
    this.translate.use(this.lang);
    console.log(this.lang + "selected.");
  }

  goToHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }
}
