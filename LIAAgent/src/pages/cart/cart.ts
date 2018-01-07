import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { packageModel } from '../../models/packageModel';
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
  arrowDown: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {

    this.StoreId = this.navParams.data.container;

    service.nowComponent="סל";
    //
    //  this.StoreId = navParams.get('StoreId');
    //  console.log(this.StoreId);
     this.StoreId = this.navParams.data.storeId;

    }


  ionViewWillEnter()
  {
    //this.StoreId = this.navParams.data.StoreId;
    this.service.nowComponent = "סל";
    let storeId = this.navParams.data.storeId;
    //this.StoreId = this.navParams.get('StoreId');

    this.StoreId = storeId;

    // if(this.service.customerDetails.StoreId != null)
    // this.StoreId = this.service.customerDetails.StoreId;
  }

demoFunc()
{
this.i=45;
}



scrollingFun(e){
  if(this.contentHandle.scrollTop >= 10){
   this.arrowDown=true;
  if(this.arrowUp != true)
  this.arrowUp=true;//show up arrow
   document.getElementById('demoBtn').click();
  }
  else
  if(this.contentHandle.scrollTop <= (this.service.productsOfCart.length)-5){
  this.arrowUp=false;
  document.getElementById('demoBtn').click();
  }
let remainder = ( this.contentHandle.getContentDimensions().contentHeight);
  // if(this.contentHandle.scrollTop > ((this.contentHandle.getScrollElement().scrollHeight)-remainder)){
    if(this.contentHandle.scrollTop +500>= ((this.contentHandle.getScrollElement().scrollHeight))){
      this.arrowDown = false;
       document.getElementById('demoBtn').click();
   }
  else
{
  this.arrowDown = true;
  document.getElementById('demoBtn').click();
}
  }


  ionViewDidEnterDown() {
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)+65,(this.contentHandle.scrollTop)+65);
  }

  ionViewDidEnterUp() {

      this.contentHandle.scrollTo((this.contentHandle.scrollTop)-65,(this.contentHandle.scrollTop)-65);
    }

  routeToProducts()
  {
    this.service.addProductToCart = true;
    this.navCtrl.parent.select(TabsEnum.products);
  }

  onGoToPersonalFormPage(StoreId){
      if(this.service.packageInCart.PackageId || this.service.productsOfCart.length){
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
checkArrows(){
    if(this.contentHandle.scrollTop <= (this.service.productsOfCart.length)-5){
        this.arrowUp=false;
        document.getElementById('demoBtn').click();}
        // alert("this.contentHandle.getScrollElement().scrollHeight "+(this.contentHandle.getScrollElement().scrollHeight));
        if(this.contentHandle.scrollTop+500 >= (this.contentHandle.getScrollElement().scrollHeight))
        {
        this.arrowDown = false;
        document.getElementById('demoBtn').click();
        }
}
deleteProduct(productId){
  this.service.clickDeleteToCart(productId);
  this.checkArrows();
}
deletePackage(){
this.service.packageInCart = new packageModel;
this.service.countPackageInCart--;
this.service.countProductsInCart--;document.getElementById('demoBtn').click();
      this.checkArrows();
}

}
