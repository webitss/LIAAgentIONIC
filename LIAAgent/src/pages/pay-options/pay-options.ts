import { TabsPage } from './../tabs/tabs';
import { Signature1Page } from './../signature1/signature1';
import { FormOfUsePage } from './../form-of-use/form-of-use';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {SignaturePage} from '../signature/signature'
import { Events } from 'ionic-angular/util/events';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { App } from 'ionic-angular/components/app/app';
import { EnterPage } from '../enter/enter';


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
     public modalController:ModalController,public events:Events,public app :App) {
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
  resetAll(){
    this.service.isTerminateOrdered=true; 
    setTimeout(() => {
      //this.navCtrl.setRoot(TabsPage);
      console.log( " this.service.productsOfCart "+this.service.productsOfCart);
      this.service.productsOfCart=[];
      this.service.countPackageInCart=0;
      this.service.countProductsInCart=0;
      this.service.isTerminateOrdered=false;
      console.log( " this.service.productsOfCart "+this.service.productsOfCart);
      this.app.getRootNav().setRoot(TabsPage);
    }, 3000);
    
     // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  // this.navCtrl.parent();
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
