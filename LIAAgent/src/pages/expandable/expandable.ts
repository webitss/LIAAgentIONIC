import { Component,Renderer,Input,ElementRef,ViewChild} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-expandable',
  templateUrl: 'expandable.html',
})
export class ExpandablePage {
  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;
  constructor(public navCtrl: NavController, public navParams: NavParams,public renderer:Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpandablePage');
  }
  ngAfterViewInit(){
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');   
}
}
