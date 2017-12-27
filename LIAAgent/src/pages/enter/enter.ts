import { Events } from 'ionic-angular/util/events';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { LiaService } from '../../providers/lia.service';

@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html',
})
export class EnterPage {
  loginName: string ;
  Congratulations: string;
  date = new Date();
  hour:any;
  showConfirmAlert() {
    this.events.publish('user:login');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,public service:LiaService) {

this.service.nowComponent="דף הבית";
this.service.allPosts();
this.service.postPackageProd(1);
this.service.postPackageProd(2);
this.service.postPackageProd(3);
this.service.postCategories();
  this.loginName=this.service.isAuthenticated.UserName;
//this.loginName="";


this.service.isNowInPageLogin=false;
    this.hour= this.date.getHours();
         console.log(this.hour);
             if(this.hour>=6&&this.hour<12 )
              this.Congratulations="בוקר טוב";
              else if(this.hour>=12&&this.hour<=14)
              this.Congratulations="צהריים טובים";
             else if(this.hour>14&&this.hour<=17)
                 this.Congratulations="אחר צהריים טובים";
             else if(this.hour>=18&&this.hour<21)
                 this.Congratulations="ערב טוב";
             else
                 this.Congratulations="לילה טוב";
  }

  ionViewWillEnter(){
    this.service.nowComponent="דף הבית";

  }


}
