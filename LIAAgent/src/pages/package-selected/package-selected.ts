import { VideoPage } from './../video/video';
import { Component } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { TabsPage } from '../tabs/tabs';
import { TabsEnum } from '../../models/tabs-enum';

@Component({
  selector: 'page-package-selected',
  templateUrl: 'package-selected.html',
})
export class PackageSelectedPage {
  nowPackage:any;
  products:any;
  product:any;
  PackageId:any;
  TabsEnum: typeof TabsEnum = TabsEnum;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service:LiaService) {
    service.isOuter=false;
    service.isInner=true;
    this.nowPackage=new Array();
    service.isPackageProductDetailed=false;
    this.PackageId= navParams.data.PackageId;
    this.nowPackage=this.service.getPackageById(this.PackageId);

    this.products=this.service.getPackageProductsById(this.PackageId);
    this.service.nowComponent="חבילות";
    //  if()
    // this.navCtrl.popToRoot();

  }
  ionViewWillEnter(){
    this.service.isOuter=false;
    this.service.isInner=true;
    this.nowPackage=this.service.getPackageById(this.PackageId);
    this.products=this.service.getPackageProductsById(this.PackageId);
    }
  details(product?)
  {
     this.service.isPackageProductDetailed=!this.service.isPackageProductDetailed;
     this.product=product;
     console.log(this.product);
  }
  routeToVideo()
  {
    this.navCtrl.push(VideoPage,{productId:this.product.ProductId});
  }

  BackToCart(){
if(this.service.changePackage)
  this.navCtrl.parent.select(this.TabsEnum.cart);
// else
// this.navCtrl.pop();
  }

}
