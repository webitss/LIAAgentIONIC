import { LiaService } from './../../providers/lia.service';
import { PayOptionsPage } from './../pay-options/pay-options';
import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {HomePage} from '../home/home';
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

  constructor(public navCtrl: NavController,public service: LiaService) {
  }

   //Other Functions

  drawCancel() {
    this.navCtrl.push(PayOptionsPage);
  }

   drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.service._signature=this.signatureImage;
    this.navCtrl.push(PayOptionsPage, {signatureImage: this.signatureImage});
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

}