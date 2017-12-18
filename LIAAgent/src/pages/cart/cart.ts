import { TabsEnum } from './../../models/tabs-enum';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';
import { PersonalFormPage } from '../personal-form/personal-form';
import { ViewChild } from '@angular/core';
import {Content} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  @ViewChild("contentRef") contentHandle: Content;
  TabsEnum: typeof TabsEnum = TabsEnum;
  id:number;
  i:number;
  arrowUp: boolean = false;
  arrowDown: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    service.nowComponent="סל";
    this.id = navParams.get('id');
    }

  ionViewWillEnter()
  {
    this.service.nowComponent = "סל";
  }
demoFunc()
{
this.i=45;
}
scrollingFun(e){
  if(this.contentHandle.scrollTop >= 10){
  if(this.arrowUp != true)
  this.arrowUp=true;//show up arrow
   document.getElementById('demoBtn').click();
  }
  else
  if(this.contentHandle.scrollTop <= (this.service.productsOfCart.length)-5){
  this.arrowUp=false;
  document.getElementById('demoBtn').click();
  }
let remainder = ( this.contentHandle.getContentDimensions().contentHeight)+5;
  if(this.contentHandle.scrollTop > ((this.contentHandle.getScrollElement().scrollHeight)-remainder)){
  this.arrowDown = false;
   }
  else
  this.arrowDown = true;
  }

  ionViewDidEnterDown() {
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)+65,(this.contentHandle.scrollTop)+65);
  }

  ionViewDidEnterUp() {
    
      this.contentHandle.scrollTo((this.contentHandle.scrollTop)-65,(this.contentHandle.scrollTop)-65);
    }

  routeToProducts()
  {
    this.navCtrl.parent.select(TabsEnum.products);
  }

  onGoToPersonalFormPage(){
    this.navCtrl.push(PersonalFormPage);

  }

  routeToPackages(){
    this.navCtrl.parent.select(TabsEnum.packages);
  }



}
