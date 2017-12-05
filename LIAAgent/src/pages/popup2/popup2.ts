import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the Popup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-popup2',
  templateUrl: 'popup2.html',
})
export class Popup2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public atrCtrl:AlertController) {
  }

  
     showConfirmAlert() {
      let alertConfirm = this.atrCtrl.create({
        title: 'Delete Items',
        message: 'Are You Sure to delete this itemss?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('No clicked');
            }
          },
          {
            text: 'Yess',
            handler: () => {
              console.log('Yes clicked');
            }
          }
        ]
      });
      alertConfirm.present();
    }
        
     

}
