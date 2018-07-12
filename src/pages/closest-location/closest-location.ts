import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-closest-location",
  templateUrl: "closest-location.html"
})
export class ClosestLocationPage {
  closest: Observable<any>;
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
    public httpClient: HttpClient,
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
      this.closest = this.httpClient.get("http://krk-api.herokuapp.com/" + this.myLatitude + "," + this.myLongitude);
      this.closest.subscribe(data => {
        this.closestLocation = data["Closest location"]["name"]["eng"];
        this.closestTour = data["Closest tour"]["name"]["eng"];
        this.locationType = data["Closest location"]["type"];
        this.locationImgSource = "assets/imgs/" + data["Closest location"]["key2"] + ".jpg";
        this.tourImgSource = "assets/imgs/" + data["Closest tour"]["key2"] + ".jpg";
        console.log(data["Closest location"]["name"]["eng"]);
        loading2.dismiss();
      });
    }).catch((error) => {
      console.log('Error getting users location', error);
    });

  }

  refresh_page() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
