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

   frmPersonal = new FormGroup({
    first_name: new FormControl("", Validators.required),
    id: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    callPhone: new FormControl()
})

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="טופס הזמנה";
  }

  onGoToBusinessFormPage(){
    this.navCtrl.push(BusinessFormPage);
  }

}
