import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';

/**
 * Generated class for the PackageSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-package-selected',
  templateUrl: 'package-selected.html',
})
export class PackageSelectedPage {
  nowPackage:any;
  product:any;
  packageId:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service:LiaService) {
    service.isOuter=false;
    service.isInner=true;
    service.isPackageProductDetailed=false;
    this.packageId= navParams.data.packageId;
    this.nowPackage=this.service.getPackageById(this.packageId);
    this.service.nowComponent="חבילות";
  }
  ionViewWillEnter(){
    this.service.isPackageProductDetailed=false;
    console.log("isPackageProductDetailed "+this.service.isPackageProductDetailed)
  }
  details(product?)
  {
     this.service.isPackageProductDetailed=!this.service.isPackageProductDetailed;
     this.product=product;
     console.log(this.product);
  }
  updateThisProduct()
  {
    this.service.packageProduct=this.product;
  }

}
