import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
//import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  @ViewChild("contentRef") contentHandle: Content;
  TabsEnum: typeof TabsEnum = TabsEnum;
  StoreId :number;
  id:number;
  i:number;
  arrowUp: boolean = false;
  arrowDown: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {

    this.StoreId = this.navParams.data.container;

    service.nowComponent="סל";
    //
     this.StoreId = navParams.get('StoreId');
     console.log(this.StoreId);
     this.StoreId = this.navParams.data.storeId;
     console.log(this.StoreId);
    }

  ionViewWillEnter()
  {
    //this.StoreId = this.navParams.data.StoreId;
    this.service.nowComponent = "סל";
    let storeId = this.navParams.data.storeId;
    //this.StoreId = this.navParams.get('StoreId');
    console.log("storeId param"+storeId);
    this.StoreId = storeId;
    console.log(this.StoreId);
    // if(this.service.customerDetails.StoreId != null)
    // this.StoreId = this.service.customerDetails.StoreId;
  }
demoFunc()
{
this.i=45;
}
scrollingFun(e){
  if(this.contentHandle.scrollTop >= 10){
  if(this.arrowUp != true)
  this.arrowUp=true;//show up arrow
   document.getElementById('demoBtn').click();
  }
  else
  if(this.contentHandle.scrollTop <= (this.service.productsOfCart.length)-5){
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
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)+65,(this.contentHandle.scrollTop)+65);
  }

  ionViewDidEnterUp() {

      this.contentHandle.scrollTo((this.contentHandle.scrollTop)-65,(this.contentHandle.scrollTop)-65);
    }

  routeToProducts()
  {
    //this.service.addProductToCart = true;
    this.navCtrl.parent.select(TabsEnum.products);
  }

  onGoToPersonalFormPage(StoreId){
if(this.service.packageInCart || this.service.productsOfCart.length){
if(StoreId){
    this.navCtrl.push(PersonalFormPage,{StoreId: StoreId});
    console.log(StoreId);
}
else
this.navCtrl.push(PersonalFormPage);
}
  }

  routeToPackages(){
    this.service.changePackage=true;
    this.navCtrl.parent.select(TabsEnum.packages);
  }



}
