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
  customerDetails:any;

  items: any = [];
  itemExpandHeight: number = 100;


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.allowDetails=false;
    
    this.customersByIdlist=new Array();
    this.customerDetails=new Array();
    this.service.customers.forEach(element => {
      element.expanded=false;
   });
   this.customersFilter=this.service.customers;
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
  //#region scrol
  scrollingFun(e){}
  ionViewDidEnterDown() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)+60,(this.contentHandle.scrollTop)+60);
  }
  ionViewDidEnterUp() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)-60,(this.contentHandle.scrollTop)-60);
  }
//#endregion
    

    customerClicked(StoreId:number){
          if(!this.allowDetails)
          {
            this.service.postStoreDetails(StoreId);
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

   





    expandItem(item){
      
             this.customersFilter.map((listItem) => {
      
                 if(item == listItem){
                     listItem.expanded = !listItem.expanded;
                     this.service.postStoreDetails(item.StoreId);
                 } else {
                     listItem.expanded = false;
                 }
      
                // return listItem;
      
             });
             this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
         }
  

}




 // let dimensions = this.contentHandle.getContentDimensions();
      // this.contentHandle.scrollTo(0, dimensions.contentHeight+100, 100);
   