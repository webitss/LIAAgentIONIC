import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { CartPage } from '../cart/cart';
import {TabsEnum} from '../../models/tabs-enum';
/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  valueButton:string;
  allowDetails:boolean;
  TabsEnum: typeof TabsEnum = TabsEnum;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.allowDetails=false;
  }
  
  customerClicked(){
    this.allowDetails=!this.allowDetails;
    this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
    }

    routeToCart(){
      this.navCtrl.parent.select(this.TabsEnum.cart); 
    }

    ionViewWillEnter()
    {
      this.service.nowComponent = "לקוחות";
    }
//this.visitData.actionType = ActionType.EndCashier;
}
