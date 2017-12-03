import { Component, Input, trigger, transition, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { style } from '@angular/core';

/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
  animations: [
    trigger('dialog', [
        transition('void => *', [
            style({ transform: 'scale3d(.3, .3, .3)' }),
            animate(100)
        ]),
        transition('* => void', [
            animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
        ])
    ])
]
})
export class PopupPage {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


 ngOnInit() { }

 close() {

     this.visible = false;
      this.visibleChange.emit(this.visible);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visible=false;
  }

 

}
