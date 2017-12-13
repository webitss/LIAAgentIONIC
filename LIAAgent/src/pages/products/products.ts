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
  items: any = [];
  itemExpandHeight: number = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="מוצרים";
    

    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false}
  ];
  }
  select(productId){
    this.navCtrl.push(ProductDetailsPage,{ productId: productId});
  }

  ionViewWillEnter()
  {
    
    this.service.nowComponent = "מוצרים";
  }


  expandItem(item){
    
           this.items.map((listItem) => {
    
               if(item == listItem){
                   listItem.expanded = !listItem.expanded;
               } else {
                   listItem.expanded = false;
               }
    
               return listItem;
    
           });
    
       }


 
}
