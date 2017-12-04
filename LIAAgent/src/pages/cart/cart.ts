import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="סל";
  }

  onGoToPersonalFormPage(){
    this.navCtrl.push(PersonalFormPage);
  }

}
