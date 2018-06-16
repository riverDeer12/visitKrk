import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';

import {HistoryPage} from "../pages/history/history";
import {ArheoPage} from "../pages/arheo/arheo";
import {ArheoDetailPage} from "../pages/arheo-detail/arheo-detail";
import {ChurchPage} from "../pages/church/church";
import {ChurchDetailPage} from "../pages/church-detail/church-detail";
import {PlacePage} from "../pages/place/place";
import {PlaceDetailPage} from "../pages/place-detail/place-detail";
import {MonasteryPage} from "../pages/monastery/monastery";
import {MonasteryDetailPage} from "../pages/monastery-detail/monastery-detail";
import {FortPage} from "../pages/fort/fort";
import {FortDetailPage} from "../pages/fort-detail/fort-detail";
import {TourPage} from "../pages/tour/tour";

import {SharePage} from "../pages/share/share";
import {RatePage} from "../pages/rate/rate";
import {EmailPage} from "../pages/email/email";

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    HistoryPage,
    ArheoPage,
    ArheoDetailPage,
    ChurchPage,
    ChurchDetailPage,
    PlacePage,
    PlaceDetailPage,
    MonasteryPage,
    MonasteryDetailPage,
    FortPage,
    FortDetailPage,
    TourPage,
    SharePage,
    RatePage,
    EmailPage
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
    MenuPage,
    HistoryPage,
    ArheoPage,
    ArheoDetailPage,
    ChurchPage,
    ChurchDetailPage,
    PlacePage,
    PlaceDetailPage,
    MonasteryPage,
    MonasteryDetailPage,
    FortPage,
    FortDetailPage,
    TourPage,
    SharePage,
    RatePage,
    EmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
