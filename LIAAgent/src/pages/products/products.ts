import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { ProductDetailsPage } from '../product-details/product-details';





@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage  {

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
