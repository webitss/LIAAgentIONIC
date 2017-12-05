import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // isClassBig: boolean;
  // isClassMini: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.isClassMini = false;
    // this.isClassBig = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    console.log("send login to service");
  }
  // mini() {
  //   this.isClassMini = !this.isClassMini;
  //   this.isClassBig = !this.isClassBig;
  //   var body;
  //   if (this.isClassMini == true) {
  //     body = document.getElementById("body");
  //     body.style.width = "50%";
  //     body.style.cssFloat = "right";
  //   }
  //   else {
  //     body = document.getElementById("body");
  //     body.style.width = "100%";
  //     //body.style.cssFloat = "right";
  //   }
  //   //this.router.navigate(['/login']);
  // }
}
