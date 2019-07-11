import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { MenuPage } from '../menu/menu';
import {MenuController} from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  lang: any;
  constructor(public navCtrl: NavController,public translate: TranslateService, public menuCtrl: MenuController) {
    this.lang = "en";
    this.translate.setDefaultLang("en");
    this.translate.use("en");
  }

  switch_language() {
    this.translate.use(this.lang);
  }

  goToMenuPage(){
    this.navCtrl.push(MenuPage);
    this.menuCtrl.open();
  }
}
