import { Component ,Renderer,ViewChild} from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';





@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html',
})
export class AccordionPage {
  @ViewChild("cc")cardContent:any;
  accordionExpanded:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public renderer:Renderer) {
    this.accordionExpanded=false;
  }
ionViewDidEnter(){
  console.log(this.cardContent.nativeElement);
  this.renderer.setElementStyle(this.cardContent.nativeElement,"webkitTransition","max-height 500ms padding 500ms");
}
  toggleAccordion(){
    if(this.accordionExpanded==false)
    {
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","0px 16px");
      this.accordionExpanded=true;
    }
    else{
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","500ms");
      this.cardContent.Content="kkkk";
    }
  }

}
