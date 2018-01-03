import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform, AlertController, App, Alert } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular/util/events';
import { LiaProxy } from '../providers/proxy';
import { Config } from 'ionic-angular/config/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
 

    alert: Alert;
    constructor(public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    //private screenOrientation: ScreenOrientation,
    public app:App,
    public events:Events,private keyboard: Keyboard,
    public proxy: LiaProxy,public config:Config
     ) {
    events.subscribe('user:login', () => {
      this.showAlert();
    });
   
    platform.ready().then(() => {
      this.keyboard.disableScroll(true);
    
      
      statusBar.styleDefault();
     // splashScreen.hide();
      platform.setDir('rtl', true);
      

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

 

 


  async showAlert(): Promise<any> {
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
            this.proxy.RemoveGuide();
            localStorage.clear();
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  activePageNow:any;
}


