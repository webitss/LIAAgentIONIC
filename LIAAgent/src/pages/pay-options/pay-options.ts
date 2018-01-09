import { TabsPage } from './../tabs/tabs';
import { Signature1Page } from './../signature1/signature1';
import { FormOfUsePage } from './../form-of-use/form-of-use';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {SignaturePage} from '../signature/signature'
import { Events } from 'ionic-angular/util/events';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { App } from 'ionic-angular/components/app/app';
import { EnterPage } from '../enter/enter';
import { CheckboxRequiredValidator } from '@angular/forms/src/directives/validators';
import { packageModel } from '../../models/packageModel';
import { LiaProxy } from '../../providers/proxy';
// import { TabsEnum } from '../../models/tabs-enum';

@Component({
  selector: 'page-pay-options',
  templateUrl: 'pay-options.html',
})
export class PayOptionsPage {
// TabsEnum: typeof Tabs = TabsEnum;
  frmPay: FormGroup;
  StoreId: number;
  customerEmail:string;
  isClicked: boolean = false;

   constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public service:LiaService,
     public modalController:ModalController,public events:Events,public app :App, public proxy: LiaProxy,public loadingCtrl: LoadingController) {
        service.nowComponent="תשלום";
service.signatureImage="";
service.signatureImage1="";
     this.frmPay = new FormGroup({
          formOfUse: new FormControl(false, Validators.requiredTrue)
        });
        // if(navParams.get('signatureImage'))
        // this.service.signatureImage = navParams.get('signatureImage');
        // if(navParams.get('signature1Image'))
        // this.service.signatureImage1 = navParams.get('signature1Image');
        this.StoreId = navParams.data.StoreId;
        this.customerEmail = navParams.data.email;
  }





  routeToFormofuse()
  {
    this.navCtrl.push(FormOfUsePage);
  }

  ionViewWillEnter(){
    // this.openSignature();
  }



async resetAll(){

console.log(this.service.signatureImage);
let loader = this.loadingCtrl.create({
  content: "Uploading..."
});
loader.present();
this.isClicked = true;
let isCreated: boolean = false;
let val;
val=await this.service.creatOrder(this.StoreId);
console.log(val);
switch(val.Error.ErrorCode){
      case 0 : isCreated = true;
      break;
      case -3: loader.dismiss();
      alert("משתמש לא נמצא")
      break;

      case -10: loader.dismiss();
      alert("אינך מורשה לבצע הזמנה");

      break;
      default:loader.dismiss();
       alert("תקלה זמנית בשרת, אנא נסה שנית מאוחר יותר");
      break;
      }

if(isCreated){
  let audio= document.getElementById('player');
  await this.proxy.CreatePDF(val.Result, this.customerEmail, this.service.signatureImage, this.service.signatureImage1)
.then(res => {
  switch(res.ErrorCode){
    case 0 :
    setTimeout(() => {
      this.service.isTerminateOrdered=true;

   }, 300);

   (audio as any).play();
    loader.dismiss();


    setTimeout(() => {
                   //this.navCtrl.setRoot(TabsPage);
                  console.log( " this.service.productsOfCart "+this.service.productsOfCart);
                  this.service.productsOfCart=[];
                  this.service.packageInCart=new packageModel;
                  this.service.countPackageInCart=0;
                  this.service.countProductsInCart=0;
                  this.service.isTerminateOrdered=false;

                  // this.app.getRootNav().setRoot(TabsPage);
                this.navCtrl.parent.select(0);
                }, 3000);

    break;
    case -3:
    loader.dismiss();
     alert("משתמש לא נמצא")

    break;

    case -10:
    loader.dismiss();
     alert("אינך מורשה לבצע הזמנה");

    break;
    default:
    loader.dismiss();
    alert("הנתונים שהזנת שגויים או חסרים");
    console.log(res.ErrorMessage);
    break;
    }
})
.catch()
}
}
opendSig:boolean=false;
  openSignatureModel(){
    if(this.opendSig==false){
    this.opendSig=true;
          this.events.subscribe('custom-user-events', (paramsVar) => {
            this.service.signatureImage=paramsVar;
            this.events.unsubscribe('custom-user-events');
            // this.opendSig=false;
        })
            setTimeout(() => {
            let modal = this.modalController.create(SignaturePage);
          modal.present();
          this.opendSig=false;
          }, 300);
}
else{
  console.log("no!!");
}
  }
  opendSig1:boolean=false;
  openSignature1Model(){
    if(this.opendSig==false){
      this.opendSig=true;
          this.events.subscribe('custom-user-events1', (paramsVar) => {
            this.service.signatureImage1=paramsVar;
            this.events.unsubscribe('custom-user-events1');
            // this.opendSig=false;
        })
          setTimeout(() => {
            let modal = this.modalController.create(Signature1Page);
          modal.present();
          this.opendSig=false;
           }, 300);
          }
          else{
            console.log("no!!");
          }
  }
  ionViewDidLeave(){
    //this.navCtrl.popToRoot();
   }
}
