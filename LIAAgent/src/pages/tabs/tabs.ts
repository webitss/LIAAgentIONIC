import { TabsEnum } from './../../models/tabs-enum';
import { Events } from 'ionic-angular/util/events';
import { LiaService } from './../../providers/lia.service';
import { CartPage } from './../cart/cart';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GalleryPage } from './../gallery/gallery';
import { PackagePage } from '../package/package';
import { AllPackagesPage } from '../all-packages/all-packages';
import { ProductsPage } from '../products/products';
import { CustomersPage } from '../customers/customers';
import { BusinessFormPage } from '../business-form/business-form';
import { EnterPage } from '../enter/enter';
import { Tabs, NavParams } from 'ionic-angular';
import { Popup2Page } from '../popup2/popup2';
import { LoginPage } from '../login/login';





@Component({
  selector:'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild("menutTabs") menuTabs: Tabs;
  tabsIndex:any;
  TabsEnum: typeof TabsEnum = TabsEnum;
  tab1Root = GalleryPage;
  tab2Root = AllPackagesPage;
  tab3Root = ProductsPage;
  tab4Root = CustomersPage;
  tab5Root = CartPage;
  constructor(private nav : NavController,public navP: NavParams,public service: LiaService,public events: Events) {
  }

  clearHistory(ev:any){
     ev.popToRoot();
  }

  showConfirmAlert() {
    this.events.publish('user:login');
  }

  routeToHome()
  {
    //this.menuTabs.select(0);
    this.nav.setRoot(this.nav.getActive().component);
   // this.tabsIndex=TabsEnum.gallery;
    // this.menuTabs.selectedIndex=this.tabsIndex;
    //this.menuTabs.selectedIndex=TabsEnum.gallery;
   // this.nav.push(EnterPage);
  }
}
