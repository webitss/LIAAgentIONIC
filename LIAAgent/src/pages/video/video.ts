import { Component } from '@angular/core';
import { LiaService } from './../../providers/lia.service';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ViewChild } from '@angular/core';


@Component({
    selector: 'page-video',
    templateUrl:'video.html' ,
    styles: []
})
export class VideoPage {
  productId:number;
@ViewChild('myvideo')myVideo:any;
    constructor(public service: LiaService,  public navParams: NavParams, public navCtrl: NavController) {
      this.productId= navParams.data.productId;
      service.getProductById(this.productId);
         }
         ionViewDidLeave(){
         // this.navCtrl.popToRoot();
         //this.navCtrl.pop(this.navCtrl)
         }
}

