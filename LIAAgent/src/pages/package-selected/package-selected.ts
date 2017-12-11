import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';

@Component({
  selector: 'page-package-selected',
  templateUrl: 'package-selected.html',
})
export class PackageSelectedPage {
  nowPackage:any;
  products:any;
  PackageId:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service:LiaService) {
    service.isOuter=false;
    service.isInner=true;
    service.isPackageProductDetailed=false;
    this.PackageId= navParams.data.PackageId;
    this.nowPackage=this.service.getPackageById(this.PackageId);
    this.products=this.service.getPackageProductsById(this.PackageId);
    this.service.nowComponent="חבילות";
  }
  ionViewWillEnter(){
    this.service.isOuter=false;
    this.service.isInner=true;
    this.service.isPackageProductDetailed=false;
    this.PackageId= this.navParams.data.PackageId;
    this.nowPackage=this.service.getPackageById(this.PackageId);
    this.products=this.service.getPackageProductsById(this.PackageId);
    console.log(" this.packageId "+ this.PackageId);
    console.log(" this.nowPackage "+ this.nowPackage);
  }
  // details(product?)
  // {
  //    this.service.isPackageProductDetailed=!this.service.isPackageProductDetailed;
  //    this.product=product;
  //    console.log(this.product);
  // }
  // updateThisProduct()
  // {
  //   this.service.packageProduct=this.product;
  // }

}
