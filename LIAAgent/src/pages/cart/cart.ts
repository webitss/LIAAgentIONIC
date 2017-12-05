import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
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
  TabsEnum: typeof TabsEnum = TabsEnum;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="סל";
  }


  routeToProducts()
  {
    this.navCtrl.parent.select(TabsEnum.products);
  }
  onGoToPersonalFormPage(){
    this.navCtrl.push(PersonalFormPage);
  }

  routeToPackages(){
    this.navCtrl.parent.select(TabsEnum.packages);
  }

  ionViewWillEnter()
  {
    this.service.nowComponent = "סל";
  }
}
