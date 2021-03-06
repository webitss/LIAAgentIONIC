import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import {TabsEnum} from '../../models/tabs-enum';
//import { NgZone } from '@angular/core';
//import {ItemSliding, Item} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { customerModel } from './../../models/customer';
import { customerDetailsModel } from '../../models/customerDetails';


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
  // itemExpandHeight: number = 100;
  arrowUp: boolean = false;
  arrowDown: boolean = true;
  demoItem: number;
  prevId: number;
  StoreId: any;
  customerDtl:customerDetailsModel;
  customerChoosed:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {

    this.StoreId = this.navParams.data.StoreId;
    this.customerDtl=new customerDetailsModel;
    this.prevId = null;
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.customersByIdlist=new Array();
    this.customerDetails=new customerModel;
  //   this.service.customers.forEach(element => {
  //     element.expanded=false;
  //  });
   this.customersFilter=this.service.customers;

  }
  //#region scrol

  demoFunc(){
    this.demoItem = 1;
  }


  scrollingFun(e){
  if(this.contentHandle.scrollTop >= 10){
  // if(this.arrowUp != true)
  this.arrowUp=true;//show up arrow
   document.getElementById('demoBtn').click();
  }
   else
  // if(this.contentHandle.scrollTop <= (this.customersFilter.length)-5)
  {
   this.arrowUp=false;
  document.getElementById('demoBtn').click();
  }
  let remainder = ( this.contentHandle.getContentDimensions().contentHeight)+5;
  if(this.contentHandle.scrollTop +500> ((this.contentHandle.getScrollElement().scrollHeight))){
  this.arrowDown = false;
  console.log("this.arrowDown "+this.arrowDown);
  console.log("this.contentHandle.scrollTop "+this.contentHandle.scrollTop)
  console.log("this.contentHandle.getScrollElement().scrollHeight "+this.contentHandle.getScrollElement().scrollHeight)
  document.getElementById('demoBtn').click();
   }
  else{
  this.arrowDown = true;
  document.getElementById('demoBtn').click();}
  }


  ionViewDidEnterDown() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)+60,(this.contentHandle.scrollTop)+60);
  }

  ionViewDidEnterUp() {
    this.contentHandle.scrollTo((this.contentHandle.scrollTop)-60,(this.contentHandle.scrollTop)-60);
  }
//#endregion




    routeToCart(StoreId){
        if(this.valueButton==="לקוח חדש")
          this.navCtrl.parent.select(this.TabsEnum.cart);
         else{
          let container: { storeId: any } = this.navParams.data.container;
          container.storeId = StoreId;
          this.navCtrl.parent.select(this.TabsEnum.cart);

      


         // this.navCtrl.parent.select(this.TabsEnum.cart,{StoreId :StoreId});
      //        this.navCtrl.parent.select(this.TabsEnum.cart);
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

   // customerChoosed:any;
     expandItem(item){
         this.customerDtl = item;
          if(item.StoreId){
            if(this.prevId == item.StoreId || (this.prevId == null)){
              this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
              this.prevId = item.StoreId;
             }
        else
        {
           if(this.valueButton == "לקוח חדש")
                 this.valueButton="עבור לסל";
                this.prevId = item.StoreId;
        }
          this.getCustomerDetails(item);
          if((this.valueButton == "לקוח חדש" || !this.customerChoosed)&&this.service.customerDetails)
          this.service.customerDetails.StoreId = null;

              }
}

getCustomerDetails(item){
  this.customersFilter.map((listItem) => {
    if(item == listItem){
          listItem.expanded = !listItem.expanded;
          this.service.postStoreDetails(item.StoreId);
        // this.customerChoosed=item;
        
      } else {
          listItem.expanded = false;
      }
    });
}

}




