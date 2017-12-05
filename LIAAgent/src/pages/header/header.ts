import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-header',
  templateUrl: './header.html'
})
export class HeaderPage {

    constructor(public navCtrl: NavController,public service:LiaService,public atrCtrl:AlertController) {
      this.userWantOut=false;
    }
    userWantOut:boolean;
    signOut() {
        //some auth strategy and then
        this.navCtrl.popToRoot();
    }

    wantOut()
    {
      this.userWantOut=true;
    }
    routeToHome(){
     this.navCtrl.push(HomePage);
    }

    showConfirmAlert() {
      let alertConfirm = this.atrCtrl.create({
        title: 'התנתקות',
        message: 'האם אתה בטוח רוצה לצאת מהאפליקציה?',
        buttons: [
          {
            text: 'לא',
            role: 'cancel',
            handler: () => {
              console.log('No clicked');
            }
          },
          {
            text: 'כן',
            handler: () => {
              console.log('Yes clicked');
            }
          }
        ]
      });
      alertConfirm.present();
    }
        
}
