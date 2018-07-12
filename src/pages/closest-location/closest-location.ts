import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";
import { HTTP } from "@ionic-native/http";
import {LoadingController} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-closest-location",
  templateUrl: "closest-location.html"
})
export class ClosestLocationPage {
  public myLatitude;
  public myLongitude;
  public closestLocation;
  public closestTour;
  public locationType;
  public locationImgSource;
  public tourImgSource;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HTTP,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation
  ) {
    let loading1 = this.loadingCtrl.create({
      content: 'Getting your location...'
    });

    loading1.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLatitude = resp.coords.latitude;
      this.myLongitude = resp.coords.longitude;
      console.log("Got users location-->" + " " + this.myLatitude + " " + this.myLongitude);
      loading1.dismiss();

      let loading2 = this.loadingCtrl.create({
        content: 'Closest location...'
      });

      //request to api //
      loading2.present();
      this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot', {}, {}).then(data =>{
        console.log(data);
      })

    }).catch((error) => {
      console.log('Error getting users location', error);
    });
  }

  refresh_page() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
