import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { HTTP } from "@ionic-native/http";
import { LoadingController } from "ionic-angular";
import { RedditDataProvider } from "../../providers/reddit-data/reddit-data";

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
    public geolocation: Geolocation,
    public redditService: RedditDataProvider
  ) {
    let loading1 = this.loadingCtrl.create({
      content: "Getting your location..."
    });

    loading1.present();

    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.myLatitude = resp.coords.latitude;
        this.myLongitude = resp.coords.longitude;
        console.log(
          "Users location-->" +
            " " +
            this.myLatitude +
            " " +
            this.myLongitude
        );
        loading1.dismiss();

        let loading2 = this.loadingCtrl.create({
          content: "Closest location..."
        });

        //request to api //
        loading2.present();
        this.redditService
          .get_reddit_data(this.myLatitude, this.myLongitude)
          .subscribe(data => {
            this.closestLocation = data["Closest location"]["name"]["eng"];
            this.locationType = data["Closest location"]["type"];
            this.locationImgSource = "assets/imgs/" + data["Closest location"]["key2"] + ".jpg";
            this.closestTour = data["Closest tour"]["name"]["eng"];
            this.tourImgSource = "assets/imgs/" + data["Closest tour"]["key2"] + ".jpg";
            console.log("Closest location name -->" + " " + this.closestLocation);
          });
        loading2.dismiss();
      })
      .catch(error => {
        console.log("Error getting users location", error);
      });
  }

  refresh_page() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
