import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // isClassBig: boolean;
  // isClassMini: boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController) {
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

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
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
