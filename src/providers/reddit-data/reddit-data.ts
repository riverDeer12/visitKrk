import { HTTP } from "@ionic-native/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RedditDataProvider {
  constructor(public http: HTTP) {
    console.log("Hello RedditDataProvider Provider");
  }

  get_reddit_data(latitude, longitude) {
    return this.http.get("http://krk-api.herokuapp.com/" + latitude + "," + longitude,{},{});
  }
}
