import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';

/**
 * Generated class for the AllPackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


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
  }

  

}
