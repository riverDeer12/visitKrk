import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { HistoryPage } from "../pages/history/history";
import { ArheoPage } from "../pages/arheo/arheo";
import { ChurchPage } from "../pages/church/church";
import { PlacePage } from "../pages/place/place";
import { MonasteryPage } from "../pages/monastery/monastery";
import { FortPage } from "../pages/fort/fort";
import { TourPage } from "../pages/tour/tour";

import { SharePage } from "../pages/share/share";
import { RatePage } from "../pages/rate/rate";
import { EmailPage } from "../pages/email/email";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any; imgSource: string }>;
  contactPages: Array<{ title: string; component: any; imgSource: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      {
        title: 'HISTORY_TITLE',
        component: HistoryPage,
        imgSource: "assets/imgs/history.png"
      },
      {
        title: 'ARHEO_TITLE',
        component: ArheoPage,
        imgSource: "assets/imgs/archeology.png"
      },
      {
        title: 'CHURCH_TITLE',
        component: ChurchPage,
        imgSource: "assets/imgs/church.png"
      },
      {
        title: 'PLACE_TITLE',
        component: PlacePage,
        imgSource: "assets/imgs/places.png"
      },
      {
        title: 'MONASTERY_TITLE',
        component: MonasteryPage,
        imgSource: "assets/imgs/monastery.png"
      },
      {
        title: 'FORT_TITLE',
        component: FortPage,
        imgSource: "assets/imgs/castle.png"
      },
      {
        title: 'TOUR_TITLE',
        component: TourPage,
        imgSource: "assets/imgs/destination.png"
      }
    ];

    this.contactPages = [
      {
        title: 'SHARE_TITLE',
        component: SharePage,
        imgSource: "assets/imgs/share.png"
      },
      {
        title: 'RATE_TITLE',
        component: RatePage,
        imgSource: "assets/imgs/rate.png"
      },
      {
        title: 'EMAIL_TITLE',
        component: EmailPage,
        imgSource: "assets/imgs/mail.png"
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}