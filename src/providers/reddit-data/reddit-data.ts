import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClosestLocationPage } from "../../pages/closest-location/closest-location";

@Injectable()
export class RedditDataProvider {
  constructor(public http: HttpClient) {
    console.log("Hello RedditDataProvider Provider");
  }

  get_reddit_data(latitude, longitude) {
    return this.http.get("http://krk-api.herokuapp.com/" + latitude + "," + longitude);
  
  }
}
