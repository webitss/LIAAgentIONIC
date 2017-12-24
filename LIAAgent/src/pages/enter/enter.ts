import { Events } from 'ionic-angular/util/events';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
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

//  this.loginName=this.service.isAuthenticated.UserName;
this.loginName="";


this.service.isNowInPageLogin=false;
    this.hour= this.date.getHours();

             if(this.hour>6&&this.hour<12 )
              this.Congratulations="בוקר טוב";
             else if(this.hour>12&&this.hour<18)
                 this.Congratulations="אחר צהריים טובים";
             else if(this.hour>18&&this.hour<22)
                 this.Congratulations="ערב טוב";
             else
                 this.Congratulations="לילה טוב";
  }

  ionViewWillEnter(){


  }


}
