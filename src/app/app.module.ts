import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {HistoryPage} from "../pages/history/history";
import {ArheoPage} from "../pages/arheo/arheo";
import {ChurchPage} from "../pages/church/church";
import {PlacePage} from "../pages/place/place";
import {MonasteryPage} from "../pages/monastery/monastery";
import {FortPage} from "../pages/fort/fort";
import {TourPage} from "../pages/tour/tour";
import {DetailsPage} from "../pages/details/details";
import {AboutPage} from "../pages/about/about";
import {ClosestLocationPage} from "../pages/closest-location/closest-location";
import {AllLocationsPage} from "../pages/all-locations/all-locations";
import {TourDetailsPage} from "../pages/tour-details/tour-details";

import {SharePage} from "../pages/share/share";
import {RatePage} from "../pages/rate/rate";
import {EmailPage} from "../pages/email/email";

import {HttpClientModule, HttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {Geolocation} from "@ionic-native/geolocation";
import {HTTP} from "@ionic-native/http";
import {Diagnostic} from "@ionic-native/diagnostic";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    ArheoPage,
    ChurchPage,
    PlacePage,
    MonasteryPage,
    FortPage,
    TourPage,
    SharePage,
    RatePage,
    EmailPage,
    DetailsPage,
    AboutPage,
    ClosestLocationPage,
    AllLocationsPage,
    TourDetailsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    ArheoPage,
    ChurchPage,
    PlacePage,
    MonasteryPage,
    FortPage,
    TourPage,
    SharePage,
    RatePage,
    EmailPage,
    DetailsPage,
    AboutPage,
    ClosestLocationPage,
    AllLocationsPage,
    TourDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LaunchNavigator,
    Geolocation,
    HTTP,
    Diagnostic
  ]
})
export class AppModule {
}
