import { LiaService } from './../../providers/lia.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BusinessFormPage } from '../business-form/business-form';

/**
 * Generated class for the PersonalFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-personal-form',
  templateUrl: 'personal-form.html',
})
export class PersonalFormPage {

  pattern =/^[a-zA-Zא-ת\s]*$/;

   frmPersonal = new FormGroup({
    first_name: new FormControl("", Validators.required),
    id: new FormControl("", [Validators.maxLength(9), Validators.minLength(9)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
    address: new FormControl(),
    email: new FormControl("", Validators.email),
    callPhone: new FormControl("",[ Validators.required, Validators.maxLength(10), Validators.minLength(10)])
})

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="טופס הזמנה";
  }

  onGoToBusinessFormPage(){
 // if(this.frmPersonal.valid)
    this.navCtrl.push(BusinessFormPage);
  }

}
