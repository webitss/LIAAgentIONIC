import { LiaService } from './../../providers/lia.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  // i:number;
  galleryPictures:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, public service: LiaService) {
    //  this.i=0;     
    
     service.getGalleryPictures()
            .then(res=>{
              console.log(res);

              this.galleryPictures=res;

            }); 
            service.nowComponent="גלריה"; 
  }

  // changePicture(right:boolean)
  // {
  //     if(right)
  //     {
  //         if(this.i<this.service.galeryPictures.length-1)
  //             this.i++;
  //     }
  //     else {
  //         if(this.i>0)
  //             this.i--;
  //     }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
