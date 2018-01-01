import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { VideoPage } from '../video/video';
import { TabsEnum } from '../../models/tabs-enum';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  productId:number;
  TabsEnum: typeof TabsEnum = TabsEnum;
  @ViewChild('slider') slider: Slides;
  prevDisabled: boolean=false;
  nextDisabled: boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.productId= navParams.data.productId;
    this.service.getProductById(this.productId);
this.isSliderFunc();


  }

  ionViewDidEnter(){
    this.service.nowComponent="מוצרים";
    console.log(this.slider);
  }


 goToVideo(){
 this.navCtrl.push(VideoPage,{ productId: this.productId } );
 }



 isSliderFunc(){
  //  this.isSlider = true;
for(let i=0; i<this.service.products.length; i++){
  if(this.service.products[i].ProductId != this.service.productsDetails[0].ProductId)
this.service.productsDetails.push(this.service.products[i]);
}
// this.service.productsDetails.push(this.service.products[this.service.products.length-1]);
 }

 slideChanged()
 {
  // let currIndex = this.slider.getActiveIndex();
  // if(currIndex==1)this.prevDisabled=false;
  // if(currIndex==this.service.productsDetails.length-1)this.nextDisabled=true;
  // else this.nextDisabled=false;
  // if(currIndex==0)this.prevDisabled=true;
 }
 ionViewDidLeave(){
  //this.navCtrl.popToRoot();
 }
 AddToCart(pr){
   console.log("enter to func ");
  this.service.clickAddToCart(pr);
    if(this.service.addProductToCart){
  this.service.addProductToCart = false;
  this.navCtrl.parent.select(this.TabsEnum.cart);
}
else
this.navCtrl.pop();
 }
}
