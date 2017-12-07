import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-form-of-use',
  templateUrl: 'form-of-use.html',
})
export class FormOfUsePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backToPay()
  {
    this.navCtrl.pop(this.navCtrl);
  }
  ionViewDidLoad() {
    
  }

}
