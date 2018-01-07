import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { VideoPage } from '../video/video';
import { TabsEnum } from '../../models/tabs-enum';
import { MAX_PICKER_SPEED } from 'ionic-angular/components/picker/picker-options';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { Refresher } from 'ionic-angular/components/refresher/refresher';


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  productId:number;
  TabsEnum: typeof TabsEnum = TabsEnum;
  @ViewChild('slider') slider: Slides;
  // @ViewChild('Content') content: Content;
  prevDisabled: boolean=false;
  nextDisabled: boolean=false;
  lp: boolean = true;
  config:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService,public viewCtrl: ViewController) {
    this.service.productsDetails=[];

    this.productId = navParams.data.productId;
    this.service.getProductById(this.productId);

this.isSliderFunc();


  }

  ionViewDidEnter(){
    this.service.nowComponent="מוצרים";
    console.log(this.slider);
   // this.slider.autoplayDisableOnInteraction=false;
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

 }
 func() {
   console.log("jhdgfh");
   this.slider.resize();
  //  document.getElementById('video').click();
 }
//  doRefresh(refresher){
//   console.log('Begin async operation', refresher);

//       setTimeout(() => {
//         console.log('Async operation has ended');
//         refresher.complete();
//       }, 2000);
//  }
ionViewDidLoad(){

}
// ngAfterViewInit()
// {
//   setTimeout(()=>
//   {
//     if(this.slider)
//     {
//          this.slider.update();
//     }
//   },300);
// }
 slideChanged(event)
 {
  let currIndex = this.slider.getActiveIndex();
  let prevIndex=null;
  if(prevIndex === null && currIndex ===0){
  console.log(this.slider.realIndex);

      //  this.doRefresh(event);
      //   this.navCtrl.push(this.navCtrl.getActive().component,{productId:24}).then(() => {
      //     let index = this.viewCtrl.index;
      //     this.navCtrl.remove(index);
      //  })
  //  this.slider.autoplayDisableOnInteraction = false;
  //  console.log(this.slider._slides[0].getAttribute('data-swiper-slide-index'));
   }
  prevIndex = currIndex;
  if(currIndex==1)this.prevDisabled=false;
  if(currIndex==this.service.productsDetails.length-1)
  this.nextDisabled=true;
  else this.nextDisabled=false;
  if(currIndex==0)this.prevDisabled=true;
// this.slider.slideNext(1);

 }


 ionViewDidLeave(){
  //this.navCtrl.popToRoot();
 }


 AddToCart(pr){
  //console.log(this.slider._slides[this.slider.clickedIndex].getAttribute('data-swiper-slide-index'));
   console.log("enter to func ");
  this.service.clickAddToCart(pr);
    let audio= document.getElementById('player');
    (audio as any).play();

    if(this.service.addProductToCart){
  this.service.addProductToCart = false;
  this.navCtrl.parent.select(this.TabsEnum.cart);
  // this.slider.autoplayDisableOnInteraction = false
}
else
this.navCtrl.pop();
 }




//  private onChangeMonth() {
//    console.log("jjjj");
//   this.doMyStuff().then((indexes) => {
//     // Last slide to first slide
//     if (indexes[0] == 6 + 1 && indexes[1] == 6) { // Change X and X + 1
//       this.slider.slideTo(1);
//     }

//     // First slide to last slide
//     if (indexes[0] == 0 && indexes[1] == 1){
//       this.slider.slideTo(7,screenLeft); // Change X to the last index of your slider

//     }
//   })
// }

// private doMyStuff() {
//   return new Promise ((resolve, reject) => {
//     // Here is where you update your values each time your slide change.
//     resolve ([this.slider.getActiveIndex(), this.slider.getPreviousIndex()]);
//     reject('some fail stuff');
//   })
// }

}
