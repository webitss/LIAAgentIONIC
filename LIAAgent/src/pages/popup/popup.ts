import { Component ,EventEmitter, Input, Output, trigger, transition, style, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visible=false;
  }

  ionViewDidLoad() {
   
  }
  close() {
    
           this.visible = false;
            this.visibleChange.emit(this.visible);
        }
}




 


    

   
   
        
   

   


