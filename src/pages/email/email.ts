import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: "page-email",
  templateUrl: "email.html"
})
export class EmailPage {
  emailText: string;
  emailSubject: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer
  ) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        console.log("Sending Emails is supported");

      } else {
        console.log("Sending Emails is not suported");
      }
    });
  }

  send_email() {
    let email = {
      to: "mtrbojevic12@gmail.hr",
      subject: this.emailSubject,
      body: this.emailText
    };

    this.emailComposer.open(email);
  }
}
