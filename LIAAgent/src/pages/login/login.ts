import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer
  // , FileUploadOptions,
  //  FileTransferObject
  } from '@ionic-native/file-transfer';
import { LiaService } from '../../providers/lia.service';
import { Events } from 'ionic-angular/util/events';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  isClassBig: boolean;
  isClassMini: boolean;
  isAuthenticated: any;
  cookieValue="chaya";
try: any;

  imageURI:any;
  imageFileName:any;
  frmLogin = new FormGroup({
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
})


  constructor(public navCtrl: NavController,
    //private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service:LiaService,
    public events:Events,
    private alertCtrl: AlertController) {

    this.isClassMini = false;
    this.isClassBig = true;
    // service.getLocalStorage();
}

ngOnInit(): void {
  // this.cookieService.set( 'Hello World', 'Test' );
  // this.cookieValue = this.cookieService.get('Hello World');
this.service.getLocalStorage();
if(this.service.isAuthenticatedLocal.UserId)
this.navCtrl.setRoot(TabsPage)
}

ionViewDidEnter(){

}



  mini() {
    this.isClassMini = !this.isClassMini;
    this.isClassBig = !this.isClassBig;
    var body;
    if (this.isClassMini == true) {
      body = document.getElementById("body");
      body.style.width = "50%";
      body.style.cssFloat = "right";
      // body.style.transition="width 0.5s";
    }
    else {
      body = document.getElementById("body");
      body.style.width = "100%";
      //body.style.cssFloat = "right";
    }

  }


   async routeToTabs(frm): Promise<any>{

    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '',
      buttons: ['אישור']
    });

    await this.service.doLogin(frm).then(()=> {

    this.isAuthenticated = this.service.isAuthenticated;

          switch(this.service.statusCode ){
          case 0 :
          this.service.setLocalStorage();
          this.navCtrl.setRoot(TabsPage)
          break;
          case -3:alert.setSubTitle("אינך מורשה להיכנס לאפליקציה")
          alert.present();
          break;
          case -10:alert.setSubTitle("אינך מורשה להיכנס לאפליקציה")
          alert.present();
          break;
          case -2:alert.setSubTitle("הנתונים שהזנת שגויים");
          alert.present();
          break
          default:alert.setSubTitle("הנתונים שהזנת שגויים");
          alert.present();
          break;
          }

         });

      }

      presentAlert() {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'הנתונים',
          buttons: ['']
        });
        alert.present();
      }

    }


    const packages: any = {
      'angular2-cookie': {main: 'core.js', defaultExtension: 'js'},
    };

/*
private setSession(){
       let key= 'user';
       let value= [{'name':'shail','email':'example@gmail.com'}];

       let value1 = JSON.stringify(value);

       sessionStorage.setItem(key, value1);
   }
   private getSession(){
       return sessionStorage.getItem('user');
   }
   private setCookie(name: string, value: string, expireDays: number, path: string = '') {
       let d:Date = new Date();
       d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
       let expires:string = `expires=${d.toUTCString()}`;
       let cpath:string = path ? `; path=${path}` : '';
       document.cookie = `${name}=${value}; ${expires}${cpath}`;
   }

   private getCookie(name: string) {
       let ca: Array<string> = document.cookie.split(';');
       let caLen: number = ca.length;
       let cookieName = `${name}=`;
       let c: string;

       for (let i: number = 0; i < caLen; i += 1) {
           c = ca[i].replace(/^\s+/g, '');
           if (c.indexOf(cookieName) == 0) {
               return c.substring(cookieName.length, c.length);
           }
       }
       return '';
   }
*/
