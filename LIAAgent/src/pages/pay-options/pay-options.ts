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
  public signatureImage : any;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public service:LiaService,
     public modalController:ModalController,public events:Events) {
    service.nowComponent="תשלום";
    this.signatureImage = navParams.get('signatureImage');
    
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
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);

  }
}
