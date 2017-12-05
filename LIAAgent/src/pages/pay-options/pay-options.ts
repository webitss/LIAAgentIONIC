import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {SignaturePage} from '../signature/signature'


@Component({
  selector: 'page-pay-options',
  templateUrl: 'pay-options.html',
})
export class PayOptionsPage {
  public signatureImage : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService,public modalController:ModalController) {
    service.nowComponent="תשלום";
    this.signatureImage = navParams.get('signatureImage');;
  }
  ionViewWillEnter(){
    // this.openSignature();
  }
  // openSignature()
  // {
  //   let modal = this.modalController.create(SignaturePage);
  //   modal.present();
  // }
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);

  }
}
