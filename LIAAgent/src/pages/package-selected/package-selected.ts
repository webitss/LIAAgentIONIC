import { VideoPage } from './../video/video';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { TabsEnum } from '../../models/tabs-enum';
import { NativeAudio } from '@ionic-native/native-audio';
// import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
@Component({
  selector: 'page-package-selected',
  templateUrl: 'package-selected.html',
})
export class PackageSelectedPage {
  nowPackage:any;
  products:any;
  product:any;
  PackageId:any;
  backcolorClass:string="{'bg-pink':nowPackage.packageColor=='bg-pink','bg-green':nowPackage.packageColor=='bg-green'}";
  // colorExpression:string=
  TabsEnum: typeof TabsEnum = TabsEnum;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service:LiaService
    // ,public smartAudio:SmartAudioProvider
    // ,public nativeAudio:NativeAudio
  ) {


    service.isOuter=false;
    service.isInner=true;
    this.nowPackage=new Array();
    service.isPackageProductDetailed=false;
    this.PackageId= navParams.data.PackageId;
    this.nowPackage=this.service.getPackageById(this.PackageId);

    if(this.PackageId!=3)
    this.products=this.service.getPackageProductsById(this.PackageId);
    this.service.nowComponent="חבילות";
    //  if()
    // this.navCtrl.popToRoot();

  }
  ionViewWillEnter(){
    this.service.isOuter=false;
    this.service.isInner=true;
    this.nowPackage=this.service.getPackageById(this.PackageId);
    if(this.PackageId!=3)
    this.products=this.service.getPackageProductsById(this.PackageId);
    }
  details(product?)
  {
     this.service.isPackageProductDetailed=!this.service.isPackageProductDetailed;
     this.product=product;

  }
  routeToVideo()
  {
    this.navCtrl.push(VideoPage,{productId:this.product.ProductId});
  }

  BackToCart(){
if(this.service.changePackage){
this.service.changePackage = false;
  this.navCtrl.parent.select(this.TabsEnum.cart);
}
else
this.navCtrl.pop();
  }
  ionViewDidLeave(){
    //this.navCtrl.popToRoot();
   }


   clickAddPackageToCart(nowPackage)
   {
    this.service.clickAddPackageToCart(nowPackage);
    // this.smartAudio.play('tabSwitch');
    if(this.service.addToCartNow){
      let audio= document.getElementById('player');
      (audio as any).play();
    }
   }
}
