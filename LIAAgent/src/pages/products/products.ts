import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { ProductDetailsPage } from '../product-details/product-details';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="מוצרים";
  }
  select(productId){
    this.navCtrl.push(ProductDetailsPage,{ productId: productId});
  }

  ionViewWillEnter()
  {
    this.service.nowComponent = "מוצרים";
  }
}
