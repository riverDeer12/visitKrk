import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AlertController} from 'ionic-angular';
import {Diagnostic} from "@ionic-native/diagnostic";

@IonicPage()
@Component({
  selector: 'page-closest-location',
  templateUrl: 'closest-location.html',
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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public geoLocation: Geolocation, 
    public httpClient: HttpClient, 
    private alertCtrl: AlertController, 
    public diagnostic: Diagnostic) {

    this.diagnostic.isLocationAvailable()
      .then((state) => {
        if (state == true){
        } else {
          this.diagnostic.switchToLocationSettings();
        }
      }).catch(e => console.error(e));

    this.geoLocation.getCurrentPosition().then((resp) => {
      this.myLatitude = resp.coords.latitude;
      this.myLongitude = resp.coords.longitude;
      this.closest = this.httpClient.get('http://krk-api.herokuapp.com/' + this.myLatitude + ',' + this.myLongitude);
      this.closest.subscribe(data => {
        this.closestLocation = data["Closest location"]["name"]["eng"];
        this.closestTour = data["Closest tour"]["name"]["eng"];
        this.locationType = data["Closest location"]["type"];
        this.locationImgSource = 'assets/imgs/' + data["Closest location"]["key2"] + '.jpg';
        this.tourImgSource = 'assets/imgs/' + data["Closest tour"]["key2"] + '.jpg';
      })
    }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: 'Error getting your location',
        message: 'Please check your internet connection',
        buttons:[
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });
  }

  refresh_page() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
