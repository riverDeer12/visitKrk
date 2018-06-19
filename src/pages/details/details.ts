import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  coordinates: Array<{ itemLat: any; itemLog: any; }>;
  public cardId;
  public itemTitle: string;
  public itemText: string;
  public itemImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public launchNavigator: LaunchNavigator) {
    this.cardId = navParams.get("cardId");
    this.itemTitle = this.cardId + "_TITLE";
    this.itemText = this.cardId + "_TEXT";
    this.itemImg = "assets/imgs/" + this.cardId + "_1.jpg";

    this.coordinates = [
      /* ARHEO - BEGIN */
      /* CRKVA SVIH SVETIH U SUŽANU */
      {
        itemLat: 45.153278,
        itemLog: 14.579444
      },
      /* CRKVA SV.JURJA NA BRDU KOD KRASA */
      {
        itemLat: 45.11175,
        itemLog: 14.605583
      },
      /* CRKVA SV.PETRA - SOLINE */
      {
        itemLat: 45.164194,
        itemLog: 14.606417
      },
      /* CRKVA SV.MARIJE OD IZVORA */
      {
        itemLat: 45.017917,
        itemLog: 14.567278
      },
      /* MOZAIK SA PRIKAZOM TRITONA */
      {
        itemLat: 45.025778,
        itemLog: 14.574333
      },
      /* RIMSKI GRAD FULFINUM*/
      {
        itemLat: 45.203972,
        itemLog: 14.544167
      },
      /* STAROKRŠĆANSKA BAZILIKA U MIRINAMA */
      {
        itemLat: 45.203925,
        itemLog: 14.543669
      },
      /* ARHEOLOŠKI LOKALITET CICKINI/LAPIDARIJ */
      {
        itemLat: 45.126,
        itemLog: 14.551889
      },
      /* LOKALITET MIRA KRAJ JURANDVORA */
      {
        itemLat: 44.972,
        itemLog: 14.740944
      },
      /* KORINTIJA */
      {
        itemLat: 44.989611,
        itemLog: 14.801028
      },
      /* CRKVA SV.MARAKA */
      {
        itemLat: 45.10575,
        itemLog: 14.667222
      },
      /* CRKVA SV.JURJA */
      {
        itemLat: 45.066472,
        itemLog: 14.70925
      },
      /* CRKVA SV.MAVRA */
      {
        itemLat: 45.072722,
        itemLog: 14.674472
      },
      /* ARHEOLOŠKI LOKALITET SV.PETAR NA KANAJTU */
      {
        itemLat: 45.03325,
        itemLog: 14.631778
      },
      /* CRKVA SV.JURJA NA MALOJ KRASI */
      {
        itemLat: 45.002056,
        itemLog: 14.626556
      },
      /* arheo - end */
      /* crkve - begin */
      /* ŽUPNA CRKVA UZNESENJA BLAŽENE DJEVICE MARIJE */
      {
        itemLat: 45.077639,
        itemLog: 14.674667
      },
      /* CRKVA SV.FILIPA I JAKOVA */
      {
        itemLat: 45.125833,
        itemLog: 14.613472
      },
      /* CRKVA SV.VIDA */
      {
        itemLat: 45.125833,
        itemLog: 14.613472
      },
      /* KATEDRALA SV.KVIRIN I ZVONIK */
      {
        itemLat: 45.0257128,
        itemLog: 14.5752304
      },
      /* CRKVA SV.KLEMENTA U KLIMNU */
      {
        itemLat: 45.154806,
        itemLog: 14.620361
      },
      /* CRKVA SV.PETRA U GABONJINU*/
      {
        itemLat: 45.11089,
        itemLog: 14.566502
      },
      /* CRKVA SV.MIHOVILA */
      {
        itemLat: 45.027889,
        itemLog: 14.574028
      },
      /* OSTACI CRKVE SV.APILINARA */
      {
        itemLat: 45.118139,
        itemLog: 14.526722
      },
      /* ARHEOLOŠKI OSTACI ISPOD KAPELE SV.MARKA */
      {
        itemLat: 44.968972,
        itemLog: 14.751111
      },
      /* CRKVA SV.KRŠEVANA */
      {
        itemLat: 45.095111,
        itemLog: 14.4555
      },
      /* SVETIŠTE MAJKE BOŽJE GORIČKE */
      {
        itemLat: 44.977861,
        itemLog: 14.723278
      },
      /* ŽUPNA CRKVA PRESVETE TROJICE U BAŠKI */
      {
        itemLat: 44.970028,
        itemLog: 14.756944
      },
      /* SAMOSTAN I CRKVA SV.LUCIJE */
      {
        itemLat: 44.977778,
        itemLog: 14.738417
      },
      /* ŽUPNA CRKVA SV.STJEPANA I ZVONIK */
      {
        itemLat: 45.131083,
        itemLog: 14.603194
      },
      /* CRKVA SV.IVANA KRSTITELJA I KAPARI */
      {
        itemLat: 45.075583,
        itemLog: 14.674083
      },
      /* ŽUPNA CRKVA UZNESENJA MARIJINA I ZVONIK */
      {
        itemLat: 45.211889,
        itemLog: 14.553667
      },
      /* CRKVA SV.IVANA */
      {
        itemLat: 44.972917,
        itemLog: 14.761917
      },
      /* CRKVA SV.DUNATA */
      {
        itemLat: 45.04,
        itemLog: 14.620111
      },
      /* ŽUPNA CRKVA SV.TROJICE */
      {
        itemLat: 45.021,
        itemLog: 14.632111
      },
      /* crkve - end */
      /* gradovi - begin */
      /* KRK */
      {
        itemLat: 45.0280099,
        itemLog: 14.5749926
      },
      /* OMIŠALJ */
      {
        itemLat: 45.212538,
        itemLog: 14.5526968
      },
      /* MALINSKA */
      {
        itemLat: 45.1223041,
        itemLog: 14.527432
      },
      /* BAŠKA */
      {
        itemLat: 44.9716361,
        itemLog: 14.7491326
      },
      /* PUNAT */
      {
        itemLat: 45.0213646,
        itemLog: 14.6299445
      },
      /* DOBRINJ */
      {
        itemLat: 45.1294025,
        itemLog: 14.6038721
      },
      /* VRBNIK */
      {
        itemLat: 45.0769445,
        itemLog: 14.674188
      },
      /* gradovi - end */
      /* utvrde - begin */
      /* KAŠTEL,BEDEMI, VOLSONIS */
      {
        itemLat: 45.026056,
        itemLog: 14.573861
      },
      /* FORTIČINA */
      {
        itemLat: 45.207083,
        itemLog: 14.553667
      },
      /* OTOČIĆ SV.MARKO I BIZANTSKA UTVRDA */
      {
        itemLat: 45.250584,
        itemLog: 14.562191
      },
      /* GRADEC I FRANKOPANI */
      {
        itemLat: 45.099944,
        itemLog: 14.629722
      },
      /* utvrde - end */
      /* samostani - begin */
      /* SAMOSTANI NA TRGU GLAGOLJAŠA */
      {
        itemLat: 45.029028,
        itemLog: 14.574361
      },
      /* FRANJEVAČKI - GLAVOTOK */
      {
        itemLat: 45.091111,
        itemLog: 14.434306
      },
      /* FRANJEVAČKI - PORAT */
      {
        itemLat: 45.123444,
        itemLog: 14.493583
      },
      /* SAMOSTAN SV.LUCIJE */
      {
        itemLat: 44.977778,
        itemLog: 14.738417
      },
      /* FRANJEVAČIKI - KOŠLJUN */
      {
        itemLat: 45.026694,
        itemLog: 14.618194
      },
      /* OBILASCI - BEGIN */
      /* OBRAMBENI ZIDOVI KRKA */
      {
        itemLat: 45.1294025,
        itemLog: 14.6038721
      },
      /* POSJET SAMOSTANIMA */
      {
        itemLat: 45.0213646,
        itemLog: 14.6299445
      },
      /* OTOČKA PROŠLOST */
      {
        itemLat: 45.212538,
        itemLog: 14.5526968
      },
      /* MALE I SKRIVENE CRKVE */
      {
        itemLat: 45.0769445,
        itemLog: 14.674188
      },
      /* OTOK KRK - NOVA ERA */
      {
        itemLat: 45.1503177,
        itemLog: 14.6089058
      },
    ]
  }

  show_map() {
    let cordId = this.cardId - 1;
    console.log(this.coordinates[cordId].itemLat, this.coordinates[cordId].itemLog);
    this.launchNavigator.navigate([this.coordinates[cordId].itemLat, this.coordinates[cordId].itemLog]);
  }
}
