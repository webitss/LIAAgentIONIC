import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { CartPage } from '../cart/cart';
import {TabsEnum} from '../../models/tabs-enum';
import { NgZone } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import {ItemSliding, Item} from 'ionic-angular';

/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  valueButton:string;
  allowDetails:boolean;
  tems1Filter=[];
  TabsEnum: typeof TabsEnum = TabsEnum;
  customersFilter: any[];
  customersByIdlist:any;




  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.allowDetails=false;
    this.customersFilter=this.service.customers;
    this.customersByIdlist=new Array();
    this.customerDetails=new Array();
  }
    customerDetails:any;
    customerClicked(StoreId:number){
          if(!this.allowDetails)
          {
              this.customerDetails=this.service.postStoreDetails(StoreId);
          }
    this.allowDetails=!this.allowDetails;
    this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
    }

    routeToCart(){
      this.navCtrl.parent.select(this.TabsEnum.cart);
    }

    ionViewWillEnter()
    {
      this.service.nowComponent = "לקוחות";
    }

    onSearchInput(event)
    {
      this.customersFilter=this.service.customers.filter(i => i.StoreName.includes(event.target.value));

    }

}
