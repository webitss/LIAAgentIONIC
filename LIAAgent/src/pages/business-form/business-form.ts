import { LiaService } from './../../providers/lia.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PayOptionsPage } from '../pay-options/pay-options';
import { PopupPage } from '../popup/popup';


/**
 * Generated class for the BusinessFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-business-form',
  templateUrl: 'business-form.html',
})
export class BusinessFormPage {
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  iconColor:any;
  borderColor:any;

  frmBusiness = new FormGroup({
    name: new FormControl("", Validators.required),
    PrivatelyHeldCompany: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    websiteAddress: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required)
})

frmMoredetails = new FormGroup({
    logo: new FormControl(),
    OpeningHours: new FormControl(),
})


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService){
    // ) {
    service.routeOrStay="businessForm";
    service.anotherDetails = false;
  }

  f()
  {
    document.getElementById('file').click();
  }

   onGoToPayOptionsPage(){
   // this.navCtrl.push(PopupPage);
       this.navCtrl.push(PayOptionsPage);
   }

  handleDragEnter() {
      this.dragging = true;
  }

  handleDragLeave() {
      this.dragging = false;
  }

  handleDrop(e) {
      e.preventDefault();
      this.dragging = false;
      this.handleInputChange(e);
  }

  handleImageLoad() {
      this.imageLoaded = true;
      this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
      var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      var pattern = /image-*/;
      var reader = new FileReader();

      if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
      }

      this.loaded = false;

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
      var reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
  }

  _setActive() {
      this.borderColor = this.activeColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.activeColor;
      }
  }

  _setInactive() {
      this.borderColor = this.baseColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.baseColor;
      }
  }
}



