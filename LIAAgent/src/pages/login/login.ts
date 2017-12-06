import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { LiaService } from '../../providers/lia.service';
import { Events } from 'ionic-angular/util/events';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // isClassBig: boolean;
  // isClassMini: boolean;
 

  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service:LiaService,
    public events:Events) {
   
    // this.isClassMini = false;
    // this.isClassBig = true;
    
}
ionViewDidEnter(){
  console.log("send login to service");
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
