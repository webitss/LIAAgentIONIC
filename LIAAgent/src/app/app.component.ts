import { Component } from '@angular/core';
import { Platform, AlertController, App, Alert } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Events } from 'ionic-angular/util/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
 // @ViewChild(Nav) nav: Nav;
  alert: Alert;
  constructor(public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private screenOrientation: ScreenOrientation,
    public app:App,
    public events:Events
  ) {
    events.subscribe('user:login', () => {
      this.showAlert();
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.setDir('rtl', true);

      if(platform.is('mobileweb')) {
        console.log(platform);
        //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      }
      
      platform.registerBackButtonAction(() => {
        let nav = this.app.getActiveNav();
        if (nav.canGoBack()) {
          nav.pop();
        } else {
          if (this.alert) {
            this.alert.dismiss();
            this.alert = null;
          } else {
            this.showAlert();
          }
        }
      });
    });
  }
  
  showAlert() {
    this.alert = this.alertCtrl.create({
      title: 'לצאת?',
      message: 'האם ברצונך להתנתק מהמערכת?',
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: 'התנתק',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }


  
}
