import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html',
})
export class TourDetailsPage {
  public cardId;
  public tourId;
  public tourTitle;
  public tourText;
  public tourImg;
  public locationCounter = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.cardId = navParams.get("cardId");
    this.tourId = navParams.get("tourId");
    this.tourTitle = this.cardId + "_TITLE";
    this.tourText = this.cardId + "_TEXT";
    this.tourImg = "assets/imgs/" + this.cardId + "_1.jpg";
  }

  show_tour(){
    let tour_title = document.getElementById('tourTitleHeader').textContent;
    
    if(tour_title == 'Obrambeni zidovi otoka Krka'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1fqyKxf602KThsP8_xm936VhcBFhZduyS&ll=45.08888834670806%2C14.728269447460889&z=11');
    }else if(tour_title == 'Defensive walls of the island of Krk'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1wBPSY8KB7_mYPb6R9AZAPpOZ4Q3987Ey&ll=45.04913144399149%2C14.669200000000046&z=11');
    }else if(tour_title == 'Posjet samostanima otoka Krka'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?hl=en&mid=1biyXvz6VxSmz9iO8v2vn-6WWTT6Wetb0&ll=45.07197973143436%2C14.535032999999999&z=12');
    }else if(tour_title == 'A visit to the monasteries of the island of Krk'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1yGYv114C8evJKzk8kR94ogjrilmpcxEp&ll=45.07197973143436%2C14.535032999999999&z=12');
    }else if(tour_title == 'Otočka prošlost u tek nekoliko kamenih ostataka'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1dAKznUtrcyWHxK4H8ssXie0zNSBTILqP&ll=45.098084903041304%2C14.605628499999966&z=11');
    }else if(tour_title == 'The past of the island preserved in a few stone remains'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1nF-hsfF4PTIljy_9jn7cdM5Hz7pFx-CW&ll=45.098084903041304%2C14.605628499999966&z=11');
    }else if(tour_title == 'Male i skrivene crkve otoka Krka'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1UPulMg7qOXwBQbhqwOiotGv9OHs2wnna&ll=45.11137389050382%2C14.642119999999977&z=12');
    }else if(tour_title == 'Small and secluded churches of the island of Krk'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1K7qvA2Ilkz6XM3lMl8sGDHp0K_iFkDPT&ll=45.11137389050382%2C14.642119999999977&z=12');
    }else if(tour_title == 'Otok Krk u prvim stoljećima nove ere'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1DGkTztSJTysZAydIsQIMa5ZMxFHJW_8g&ll=45.08839558346452%2C14.643850499999985&z=11');
    }else if(tour_title == 'The island of Krk in the first centuries of the new age'){
      this.iab.create('https://www.google.com/maps/d/u/0/viewer?mid=1BmErP9jUAvUdG9yaljOrlLUbSXC4XKjx&ll=45.08839558346452%2C14.643850499999985&z=11');
    }
        
  }

}
