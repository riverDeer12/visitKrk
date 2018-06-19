import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AlertController} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public geoLocation: Geolocation, public httpClient: HttpClient, private alertCtrl: AlertController) {

    this.geoLocation.getCurrentPosition().then((resp) => {
      this.myLatitude = resp.coords.latitude;
      this.myLongitude = resp.coords.longitude;
      this.closest = this.httpClient.get('http://krk-api.herokuapp.com/' + this.myLatitude + ',' + this.myLongitude);
      this.closest.subscribe(data => {
        this.closestLocation = data["Closest location"]["name"]["eng"];
        this.closestTour = data["Closest tour"]["name"]["eng"];
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  refresh_page() {
    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
