import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';


@Component({
  selector: 'page-package',
  templateUrl: 'package.html',
})
export class PackagePage {
  @Input()package;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="חבילות";
    // console.log(package);
  }

  // select(){
  //   this.navCtrl.push(PackageSelectedPage,{ packageId: this.package.PackageId });
  // }

}
