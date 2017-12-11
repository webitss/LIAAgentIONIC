import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  productId:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.productId= navParams.data.productId;
   
  }

  ionViewDidEnter(){
    this.service.nowComponent="מוצרים";
  }
}
