import { Events } from 'ionic-angular/util/events';
import { LiaService } from './../../providers/lia.service';
import { PayOptionsPage } from './../pay-options/pay-options';
import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {HomePage} from '../home/home';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import {  NavParams } from 'ionic-angular';
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  @ViewChild(SignaturePad) public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage : string;
  
  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public service:LiaService,
    public events:Events,navParams:NavParams) {
  }

  
  drawCancel() {
      this.navCtrl.pop(this.navCtrl);
  }
  callback:any;
   drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.service._signature=this.signatureImage;
      this.navCtrl.pop().then(() => {
      /// Trigger custom event and pass data to be send back
      this.events.publish('custom-user-events', this.signatureImage);
  });
    
   
    //this.uploadFile();
  }

  drawClear() {
    this.signaturePad.clear();
  }

  canvasResize() {
     let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

ngAfterViewInit() {
      this.signaturePad.clear();
      this.canvasResize();
}

imageFileName:any;
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
  
  fileTransfer.upload(this.service._signature, 'http://www.webit-sys.com/img/projects/project-3.jpg', options)
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

}