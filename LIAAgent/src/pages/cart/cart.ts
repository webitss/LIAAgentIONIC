import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';



/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  @ViewChild("contentRef") contentHandle: Content;
  TabsEnum: typeof TabsEnum = TabsEnum;
  StoreId :number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="סל";
    // this.StoreId = navParams.get('StoreId');
this.StoreId = 86;
    }

  ionViewWillEnter()
  {
    this.service.nowComponent = "סל";
  }

  scrollingFun(e){}

  ionViewDidEnterDown() {
    // let dimensions = this.contentHandle.getContentDimensions();
    // this.contentHandle.scrollTo(0, dimensions.contentHeight+100, 100);
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)+65,(this.contentHandle.scrollTop)+65);
  }

  ionViewDidEnterUp() {

      this.contentHandle.scrollTo((this.contentHandle.scrollTop)-65,(this.contentHandle.scrollTop)-65);
    }

  routeToProducts()
  {
    this.navCtrl.parent.select(TabsEnum.products);
  }

  onGoToPersonalFormPage(StoreId){
if(StoreId){
    this.navCtrl.push(PersonalFormPage,{StoreId: StoreId});
    console.log(StoreId);
}
else
this.navCtrl.push(PersonalFormPage);
  }

  routeToPackages(){
    this.navCtrl.parent.select(TabsEnum.packages);
  }



}
