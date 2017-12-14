import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { LiaService } from '../../providers/lia.service';
import { Events } from 'ionic-angular/util/events';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  isClassBig: boolean;
  isClassMini: boolean;
  isAuthenticated: any;

  imageURI:any;
  imageFileName:any;
  frmLogin = new FormGroup({
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
})


  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service:LiaService,
    public events:Events) {

    this.isClassMini = false;
    this.isClassBig = true;

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
    //this.router.navigate(['/login']);
  }

  routeToTabs(frm){
    this.navCtrl.setRoot(TabsPage);
  }

//  async routeToTabs(frm): Promise<any>{
//   // this.isAuthenticated = this.service.doLogin(frm);
// await this.service.doLogin(frm).then(()=> {
// this.isAuthenticated = this.service.isAuthenticated;
//   if (this.isAuthenticated != null){
//   console.log(this.isAuthenticated);
//       this.navCtrl.setRoot(TabsPage);
//   }
//   else
//   alert("משתמש לא נמצא");
//     });
//   }
}
