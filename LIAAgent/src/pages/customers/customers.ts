import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { CartPage } from '../cart/cart';
import {TabsEnum} from '../../models/tabs-enum';
import { NgZone } from '@angular/core';
import {ItemSliding, Item} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

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
  @ViewChild("contentRef") contentHandle: Content;
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

            this.service.postStoreDetails(StoreId);
          }
    this.allowDetails=!this.allowDetails;
    this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
    console.log(this.customerDetails);
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

    scrollingFun(e){}

    ionViewDidEnterDown(e) {
      // let dimensions = this.contentHandle.getContentDimensions();
      // this.contentHandle.scrollTo(0, dimensions.contentHeight+100, 100);
    console.log(this.contentHandle.scrollTop);
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)+10,(this.contentHandle.scrollTop)+10);
    }

    ionViewDidEnterUp(e) {
    console.log(this.contentHandle.scrollTop);
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)-10,(this.contentHandle.scrollTop)-10);
    }

}
