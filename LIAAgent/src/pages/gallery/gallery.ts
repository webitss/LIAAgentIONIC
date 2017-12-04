import { LiaService } from './../../providers/lia.service';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage implements OnInit {
  prevDisabled: boolean = true;
  nextDisabled: boolean = false;
  @ViewChild('slider') slider: Slides;
  
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams, public service: LiaService) {
    //service.nowComponent = "גלריה";
    service.load();
  }
  ionViewWillEnter()
  {
    this.service.nowComponent = "גלריה";
  }
  ngOnInit() {

  }

 
  slideNext() {
    let currIndex= this.slider.getActiveIndex();
    if(++currIndex == this.service.galeryPictures.length-1)
      this.nextDisabled = true;
    

    this.slider.slideNext();
    this.prevDisabled = false;

    
  }
  slidePrev() {
    
    let currIndex= this.slider.getActiveIndex();
   
    if(--currIndex == 0)
      this.prevDisabled = true;

    this.slider.slidePrev();
    this.nextDisabled = false;      
    
  }




}
