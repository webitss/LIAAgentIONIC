import { Signature1Page } from './../signature1/signature1';
import { FormOfUsePage } from './../form-of-use/form-of-use';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {SignaturePage} from '../signature/signature'
import { Events } from 'ionic-angular/util/events';


@Component({
  selector: 'page-pay-options',
  templateUrl: 'pay-options.html',
})
export class PayOptionsPage {
  
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public service:LiaService,
     public modalController:ModalController,public events:Events) {
    service.nowComponent="תשלום";
   if(navParams.get('signatureImage'))
    this.service.signatureImage = navParams.get('signatureImage');
    if(navParams.get('signature1Image'))
    this.service.signatureImage1 = navParams.get('signature1Image');
   
  }
  routeToFormofuse()
  {
    this.navCtrl.push(FormOfUsePage);
  }
  ionViewWillEnter(){
    // this.openSignature();
  }
  // openSignature()
  // {
    //iocordova platform add android//   let modal = this.modalController.create(SignaturePage);
  //   modal.present();
  // }
  openSignatureModel(){
    this.nowSigA=true;
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);

  }
  nowSigA:Boolean=false;
  nowSigB:boolean=false;
  openSignature1Model(){
    this.nowSigB=true;
    setTimeout(() => {
       let modal = this.modalController.create(Signature1Page);
    modal.present();
    }, 300);

  }
}
