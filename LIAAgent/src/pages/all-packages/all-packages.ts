import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PackageSelectedPage } from './../package-selected/package-selected';

@Component({
  selector: 'page-all-packages',
  templateUrl: 'all-packages.html',
})
export class AllPackagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.service.nowComponent="חבילות";
    this.service.isOuter=true;
    this.service.isInner=false;
    this.service.isPackageProductDetailed=false;
    // this.service.getPackages();
  }

  ionViewWillEnter()
  {
    this.service.nowComponent = "חבילות";
    this.service.isOuter=true;
    this.service.isInner=false;
  }
  select(PackageId:number)
  {
    this.navCtrl.push(PackageSelectedPage,{ PackageId: PackageId });
  }

}
