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
  isSlider: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.productId= navParams.data.productId;
    this.service.getProductById(this.productId);
  }

  ionViewDidEnter(){
    this.service.nowComponent="מוצרים";
  }


 goToVideo(){
 this.navCtrl.push(VideoPage,{ productId: this.productId } );
 }

 AddToCart(){
  this.service.clickAddToCart(this.service.thisProductDetails);
if(this.service.addProductToCart){
  this.service.addProductToCart = false;
this.navCtrl.parent.select(this.TabsEnum.cart);
}
else
this.navCtrl.pop();
 }

 isSliderFunc(){
   this.isSlider = true;
 }

getNextProduct(){
this.slider.slideNext(1);
}

}
