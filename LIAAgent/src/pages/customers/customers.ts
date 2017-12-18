import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { CartPage } from '../cart/cart';
import {TabsEnum} from '../../models/tabs-enum';
import { NgZone } from '@angular/core';
import {ItemSliding, Item} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { customerModel } from './../../models/customer';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  @ViewChild("contentRef") contentHandle: Content;
  valueButton:string;
  TabsEnum: typeof TabsEnum = TabsEnum;
  customersFilter: any[];
  customersByIdlist:any;
  customerDetails:customerModel;
  itemExpandHeight: number = 100;
  arrowUp: boolean = false;
  arrowDown: boolean = true;
  demoItem: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.customersByIdlist=new Array();
    this.customerDetails=new customerModel;
    this.service.customers.forEach(element => {
      element.expanded=false;
   });
   this.customersFilter=this.service.customers;

  }
  //#region scrol

  demoFunc(){
    this.demoItem = 1;
  }

  scrollingFun(e){
  if(this.contentHandle.scrollTop >= 10){
  if(this.arrowUp != true)
  this.arrowUp=true;//show up arrow
   document.getElementById('demoBtn').click();
  }
  else
  if(this.contentHandle.scrollTop <= (this.customersFilter.length)-5){
  this.arrowUp=false;
  document.getElementById('demoBtn').click();
  }
let remainder = ( this.contentHandle.getContentDimensions().contentHeight)+5;
  if(this.contentHandle.scrollTop > ((this.contentHandle.getScrollElement().scrollHeight)-remainder)){
  this.arrowDown = false;
   }
  else
  this.arrowDown = true;
  }

  ionViewDidEnterDown() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)+60,(this.contentHandle.scrollTop)+60);
  }

  ionViewDidEnterUp() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)-60,(this.contentHandle.scrollTop)-60);
  }
//#endregion




    routeToCart(StoreId){
      if(this.valueButton=="לקוח חדש")
      this.navCtrl.parent.select(this.TabsEnum.cart);
      else{//לקוח קיים יש להעביר את מספר הלקוח this.customerChoosed.StoreId
      this.navCtrl.parent.select(this.TabsEnum.cart,{ StoreId :StoreId });
    }
    }

    ionViewWillEnter()
    {
      this.service.nowComponent = "לקוחות";
    }

    onSearchInput(event)
    {
      this.customersFilter=this.service.customers.filter(i => i.StoreName.includes(event.target.value));
    }

    customerChoosed:any;
     expandItem(item){
          this.customersFilter.map((listItem) => {
          if(item == listItem){
                listItem.expanded = !listItem.expanded;
                this.service.postStoreDetails(item.StoreId);
                this.customerChoosed=item;
                console.log(item);
            } else {
                listItem.expanded = false;
            }
           });
        this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";

      }


}




 // let dimensions = this.contentHandle.getContentDimensions();
      // this.contentHandle.scrollTo(0, dimensions.contentHeight+100, 100);
