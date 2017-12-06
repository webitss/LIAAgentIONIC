import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Events } from 'ionic-angular/util/events';

@Component({
  selector: 'page-header',
  templateUrl: './header.html'
})
export class HeaderPage {

    constructor(public navCtrl: NavController,public service:LiaService,public atrCtrl:AlertController,public events:Events) {
      this.userWantOut=false;
    }
    userWantOut:boolean;
    signOut() {
        //some auth strategy and then
        this.navCtrl.popToRoot();
    }
    // npm 
    wantOut()
    {
      this.userWantOut=true;
    }
    routeToHome(){
     this.navCtrl.push(HomePage);
    }

    showConfirmAlert() {
      this.events.publish('user:login');
    }
        
}
