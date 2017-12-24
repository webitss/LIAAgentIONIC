//import { SassHelperComponent } from './../../components/sass-helper/sass-helper';
import { TabsEnum } from './../../models/tabs-enum';
import { Events } from 'ionic-angular/util/events';
import { LiaService } from './../../providers/lia.service';
import { CartPage } from './../cart/cart';
import { Component, ViewChild } from '@angular/core';
//import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GalleryPage } from './../gallery/gallery';
//import { PackagePage } from '../package/package';
import { AllPackagesPage } from '../all-packages/all-packages';
import { ProductsPage } from '../products/products';
import { CustomersPage } from '../customers/customers';
//import { BusinessFormPage } from '../business-form/business-form';
import { Tabs, NavParams } from 'ionic-angular';
//import { Popup2Page } from '../popup2/popup2';
//import { LoginPage } from '../login/login';
//import { first } from 'rxjs/operator/first';





@Component({
  selector:'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //@ViewChild(SassHelperComponent)
  //private sassHelper: SassHelperComponent;
  @ViewChild("menutTabs") menuTabs: Tabs;
  tabsIndex:any;
  TabsEnum: typeof TabsEnum = TabsEnum;
  tab1Root = GalleryPage;
  tab2Root = AllPackagesPage;
  tab3Root = ProductsPage;
  tab4Root = CustomersPage;
  tab5Root = CartPage;
  StoreId: number;
  colorM:string;
  myContainer: { storeId?: any } = {};
   constructor(private nav : NavController,public params: NavParams,public service: LiaService,public events: Events) {
    this.params = params.data;
    this.params = params;

        console.log(this.params); // returns NavParams {data: Object}
    this.StoreId = this.params.data;
      }


  clearHistory(ev:any){
     ev.popToRoot();
  }
  clearHistoryAndElse(ev:any){
    //this.service.addProductToCart = false;
    this.clearHistory(ev);
  }

ionViewDidEnter(){


}
  showConfirmAlert() {
    this.events.publish('user:login');
  }

    routeToHome()  {
      //console.log( this.sassHelper.readProperty('myColor'));
      //console.log( this.sassHelper.setProperty('myColor',"green"));
    console.log(this.nav.getActive().component);
    this.nav.setRoot(this.nav.getActive().component);

  }
}




