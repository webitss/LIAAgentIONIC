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
  items1 = [];
  items1Filter=[];
  TabsEnum: typeof TabsEnum = TabsEnum;
<<<<<<< HEAD
  
=======
  customersFilter: any[];

>>>>>>> da0ece09e472cdc0708bf90117081a12004016e4


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.valueButton="לקוח חדש";
    service.nowComponent="לקוחות";
    this.allowDetails=false;
    this.items1 = [1,2,3,4,5,6,7,8,9,10,10];
    this.items1Filter=this.service.customers;
  }

  customerClicked(){
    //this.allowDetails=!this.allowDetails;
    this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
    }

    routeToCart(){
      this.navCtrl.parent.select(this.TabsEnum.cart);
    }

    search(event) {
      this.customersFilter = this.service.customers.filter(c => c.name.includes(event.target.value));
  }

    ionViewWillEnter()
    {
      this.service.nowComponent = "לקוחות";
    }
    onSearchInput(event)
    {
      let a:string="aaa";
      console.log(event.target.value);
      console.log(a.includes(event.target.value));
      this.items1Filter=this.service.customers.filter(i=>i.name.includes(event.target.value));
  
    console.log(this.items1Filter);
    }
//this.visitData.actionType = ActionType.EndCashier;
}
