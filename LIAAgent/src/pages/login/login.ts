import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // isClassBig: boolean;
  // isClassMini: boolean;
  imageURI:any;
  imageFileName:any;
  frmLogin = new FormGroup({
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
})

  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

    // this.isClassMini = false;
    // this.isClassBig = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    console.log("send login to service");
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://www.webit-sys.com/img/projects/project-3.jpg', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://www.webit-sys.com/img/projects/project-3.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
