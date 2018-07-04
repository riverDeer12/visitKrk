import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

@IonicPage()
@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html',
})
export class TourDetailsPage {
  wallCoordinates: Array<{ itemLat: any; itemLog: any; }>;
  monasteryCoordinates: Array<{ itemLat: any; itemLog: any; }>;
  newEraCoordinates: Array<{ itemLat: any; itemLog: any; }>;
  historyCoordinates: Array<{ itemLat: any; itemLog: any; }>;
  churchesCoordinates: Array<{ itemLat: any; itemLog: any; }>;

  public cardId;
  public tourId;
  public tourTitle;
  public tourText;
  public tourImg;
  public locationCounter = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public launchNavigator: LaunchNavigator) {
    this.cardId = navParams.get("cardId");
    this.tourId = navParams.get("tourId");
    this.tourTitle = this.cardId + "_TITLE";
    this.tourText = this.cardId + "_TEXT";
    this.tourImg = "assets/imgs/" + this.cardId + "_1.jpg";

    this.wallCoordinates = [
      /* OBRAMBENI ZIDOVI KRKA */
      {
        itemLat: 45.1294025,
        itemLog: 14.6038721
      },
      /* GRADEC I FRANKOPANI */
      {
        itemLat: 45.099944,
        itemLog: 14.629722
      },
      /* KRK */
      {
        itemLat: 45.0280099,
        itemLog: 14.5749926
      },
      /* KAŠTEL I BEDEMI*/
      {
        itemLat: 45.02605,
        itemLog: 14.573861
      },
      /* CRKVA SV.IVANA KRSTITELJA */
      {
        itemLat: 45.075583,
        itemLog: 14.674083
      }
    ];

    /* POSJET SAMOSTANIMA */
    this.monasteryCoordinates = [
      /* PUNAT */
      {
        itemLat: 45.0213646,
        itemLog: 14.6299445
      },
      /* FRANJEVAČKI SAMOSTAN - KOŠLJUN */
      {
        itemLat: 45.026694,
        itemLog: 14.618194
      },
      /* TRG GLAGOLJAŠA */
      {
        itemLat: 45.029028,
        itemLog: 14.574361
      },
      /* CRKVA SV.MIHOVILA */
      {
        itemLat: 45.027889,
        itemLog: 14.574028
      },
      /* FRANJEVAČKI SAMOSTAN - GALOVOTOK */
      {
        itemLat: 45.091111,
        itemLog: 14.434306
      },
      /* FRANJEVAČKI SAMOSTAN - PORAT */
      {
        itemLat: 45.123444,
        itemLog: 14.493583
      },
    ];

    this.newEraCoordinates = [
      /* UVALA SOLINE */
      {
        itemLat: 45.1503177,
        itemLog: 14.6089058
      },
      /* RIMSKI GRAD FULFINUM */
      {
        itemLat: 45.203972,
        itemLog: 14.544167
      },
      /* KAŠTEL BEDEMI*/
      {
        itemLat: 45.026056,
        itemLog: 14.573861
      },
      /* MOZAIK SA PRIKAZOM TRITONA*/
      {
        itemLat: 45.025778,
        itemLog: 14.574333
      },
      /* ARHEOLOŠKI OSTACI ISPOD KAPELE SV.MARKA */
      {
        itemLat: 44.968972,
        itemLog: 14.751111
      }
    ];

    this.historyCoordinates = [
      /* ŽUPNA CRKVA UZNESENJA*/
      {
        itemLat: 45.077639,
        itemLog: 14.674667
      },
      /* ARHEOLOŠKI LOKALITET LAPIDARIJ */
      {
        itemLat: 45.126,
        itemLog: 14.551889
      },
      /* CRKVA SV.DUNATA */
      {
        itemLat: 45.04,
        itemLog: 14.620111
      },
      /* ARHEOLOŠKI LOKALITET SV.PETAR NA KANAJTU*/
      {
        itemLat: 45.03325,
        itemLog: 14.631778
      }
    ];

    this.churchesCoordinates = [
      /* VRBNIK */
      {
        itemLat: 45.0769445,
        itemLog: 14.674188
      },
      /* CRKVA SV.MAVRA */
      {
        itemLat: 45.072722,
        itemLog: 14.674472
      },
      /* CRKVA SV.MARAKA */
      {
        itemLat: 45.10575,
        itemLog: 14.667222
      },
      /* CRKVA SV.VIDA */
      {
        itemLat: 45.125833,
        itemLog: 14.613472
      },
      /* CRKVA SV.FILIPA I JAKOVA*/
      {
        itemLat: 45.125833,
        itemLog: 14.613472
      },
      /* CRKVA SV.KLEMENTA U KLIMNU */
      {
        itemLat: 45.154806,
        itemLog: 14.620361
      }
    ]
  }

  show_map() {
    let tourid = this.tourId-1;
    let loccounter = this.locationCounter-1;
    let tours: object[] = [this.wallCoordinates, this.monasteryCoordinates, this.newEraCoordinates, this.historyCoordinates, this.churchesCoordinates];
    this.launchNavigator.navigate([tours[tourid][loccounter].itemLat, tours[tourid][loccounter].itemLog]);
  }

  next_location() {
    this.locationCounter++;
    let tourid = this.tourId-1;
    let tours: object[] = [this.wallCoordinates, this.monasteryCoordinates, this.newEraCoordinates, this.historyCoordinates, this.churchesCoordinates];
    if(this.locationCounter > tours[tourid]["length"]){
      this.locationCounter--;
      return;
    }
  }

  previous_location() {
    if(this.locationCounter == 1){
      return;
    }
    this.locationCounter--;
  }

}
