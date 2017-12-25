import { Signature1Page } from './../signature1/signature1';
import { FormOfUsePage } from './../form-of-use/form-of-use';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {SignaturePage} from '../signature/signature'
import { Events } from 'ionic-angular/util/events';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'page-pay-options',
  templateUrl: 'pay-options.html',
})
export class PayOptionsPage {

  frmPay: FormGroup = new FormGroup({
    formOfUse: new FormControl("", Validators.required)
  });

   constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public service:LiaService,
     public modalController:ModalController,public events:Events) {
        service.nowComponent="תשלום";
        // if(navParams.get('signatureImage'))
        // this.service.signatureImage = navParams.get('signatureImage');
        // if(navParams.get('signature1Image'))
        // this.service.signatureImage1 = navParams.get('signature1Image');

  }





  routeToFormofuse()
  {
    this.navCtrl.push(FormOfUsePage);
  }
  ionViewWillEnter(){
    // this.openSignature();
  }

  openSignatureModel(){
          this.events.subscribe('custom-user-events', (paramsVar) => {
            this.service.signatureImage=paramsVar;
            this.events.unsubscribe('custom-user-events');
        })
            setTimeout(() => {
            let modal = this.modalController.create(SignaturePage);
          modal.present();
          }, 300);

  }

  openSignature1Model(){
          this.events.subscribe('custom-user-events', (paramsVar) => {

            this.service.signatureImage1=paramsVar;
            this.events.unsubscribe('custom-user-events');
        })
          setTimeout(() => {
            let modal = this.modalController.create(Signature1Page);
          modal.present();
          }, 300);

  }
}
