import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

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
    service.nowComponent="סל";
    //this.StoreId = navParams.get('StoreId');
    // this.StoreId = this.navParams.data.StoreId;
if(service.customerDetails.StoreId != null)
    this.StoreId = service.customerDetails.StoreId;
    }

  ionViewWillEnter()
  {
    this.service.nowComponent = "סל";
  }
demoFunc()
{
this.i=45;
}
  scrollingFun(){
    if(this.contentHandle.scrollTop >= 10){
        if(this.arrowUp != true)
         this.arrowUp=true;//show up arrow
         document.getElementById('demoBtn').click();
    }
    else
    // this.service.arrowUp=false;
    if(this.contentHandle.scrollTop <= (this.service.productsOfCart.length)-5){
       this.arrowUp=false;
       document.getElementById('demoBtn').click();
    }
    if(this.contentHandle.scrollTop > 6680){
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
    this.navCtrl.parent.select(TabsEnum.products);
  }

  onGoToPersonalFormPage(StoreId){
if(StoreId){
    this.navCtrl.push(PersonalFormPage,{StoreId: StoreId});
    console.log(StoreId);
}
else
this.navCtrl.push(PersonalFormPage);
  }

  routeToPackages(){
    this.navCtrl.parent.select(TabsEnum.packages);
  }



}
