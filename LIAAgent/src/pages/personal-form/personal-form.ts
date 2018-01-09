import { LiaService } from './../../providers/lia.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BusinessFormPage } from '../business-form/business-form';
//import { customerDetailsModel } from '../../models/customerDetails';
import { storeOwnerModel } from '../../models/storeOwnerModel';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';
//import { AbstractControlOptions } from '@angular/forms/src/model';




@Component({
  selector: 'page-personal-form',
  templateUrl: 'personal-form.html',
})
export class PersonalFormPage {

  pattern =/^[a-zA-Zא-ת\s]*$/;
  frmPersonal: FormGroup = new FormGroup({
    first_name: new FormControl("", [Validators.required,Validators.maxLength(20)]),
    id: new FormControl("", [Validators.maxLength(9), Validators.minLength(9)]),
    phoneNumber: new FormControl("", [Validators.required ,Validators.maxLength(9), Validators.minLength(9)]),
    address: new FormControl("",Validators.maxLength(50)),
    email: new FormControl("",  Validators.email),
    callPhone: new FormControl("",[Validators.required ,Validators.maxLength(10), Validators.minLength(10),Validators.pattern('[0]+[5]+[0-9]*')] )
    // [Validators.required ,Validators.maxLength(10), Validators.minLength(10)]
} );
  StoreId:number;
  StoreOwnerObj: any;
  customerDtl: storeOwnerModel;
  // @ViewChild('quantityUnitCode', { read: ElementRef }) quantityUnitCodeElementRef: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.customerDtl = new storeOwnerModel;
    this.StoreId = navParams.data.StoreId;
    this.getStorOfCustomerDetailsArray();
    service.nowComponent="טופס הזמנה";
// this.testFunction1();
  }

// customValidationFunction(formGroup): any {
//    let nameField = formGroup.controls['name'].value; //access any of your form fields like this
//    return (nameField.length < 5) ? { nameLengthFive: true } : null;
// }

// testFunction1(){
// this.frmPersonal.controls["first_name"].setValidators(null);
// }
testFunction(){

}flowControlsChanges:any=0;
  ngOnInit() {
    // this.testFunction1();
    this.frmPersonal.valueChanges.subscribe((value: any) => {
            if(value.callPhone.length ==10){
              this.flowControlsChanges++;
                  if(this.flowControlsChanges==1){
                  this.frmPersonal.controls["phoneNumber"].clearValidators();
                  this.frmPersonal.controls["phoneNumber"].setValidators( [Validators.maxLength(9), Validators.minLength(9),Validators.pattern('[0]+[0-9]*')]);
                  this.flowControlsChanges++;
                                 }
                  if(this.flowControlsChanges==2){
                  this.frmPersonal.controls["phoneNumber"].updateValueAndValidity();
                  this.flowControlsChanges++;
                  }
                                            }
              if(value.callPhone.length ==0&&value.phoneNumber.length==0){
                this.frmPersonal.controls["phoneNumber"].setValidators( [Validators.required ,Validators.maxLength(9), Validators.minLength(9),Validators.pattern('[0]+[0-9]*')]);
                this.frmPersonal.controls["callPhone"].setValidators([Validators.required ,Validators.maxLength(10), Validators.minLength(10),Validators.pattern('[0]+[5]+[0-9]*')]);
              this.flowControlsChanges=0;}
            if(value.phoneNumber.length==9){
              this.flowControlsChanges++;
              if(this.flowControlsChanges==1){
              this.frmPersonal.controls["callPhone"].clearValidators();
              this.frmPersonal.controls["callPhone"].setValidators([Validators.maxLength(10), Validators.minLength(10),Validators.pattern('[0]+[5]+[0-9]*')] );
              this.flowControlsChanges++;
                             }
              if(this.flowControlsChanges==2){
              this.frmPersonal.controls["callPhone"].updateValueAndValidity();
              this.flowControlsChanges++;
            }}

       });
    }

  getStorOfCustomerDetailsArray(){
    if(this.StoreId){
    for(let i = 0; i < this.service.customerDetailsArray.length; i++)
    if(this.service.customerDetailsArray[i].StoreId == this.StoreId)
    this.StoreOwnerObj = this.service.customerDetailsArray[i].Owner;
    }
    }

  onGoToBusinessFormPage(frm, StoreId){
 // if(this.frmPersonal.valid)
console.log(this.customerDtl.Name);
if(this.StoreOwnerObj){
 this.customerDtl.Name = this.StoreOwnerObj.Name;
 this.customerDtl.IdNum = this.StoreOwnerObj.IdNum;
 this.customerDtl.Phone = this.StoreOwnerObj.Phone;
 this.customerDtl.Address = this.StoreOwnerObj.Address;
 this.customerDtl.Email = this.StoreOwnerObj.Email;
 this.customerDtl.CellPhone = this.StoreOwnerObj.callPhone;
}
else{
  this.customerDtl.Name = frm.first_name;
  this.customerDtl.IdNum = frm.id;
  this.customerDtl.Phone = frm.phoneNumber;
  this.customerDtl.Address = frm.address;
  this.customerDtl.Email = frm.email;
  this.customerDtl.CellPhone = frm.callPhone;
}
// this.service.submitFrmPersonal(this.customerDtl);
if(this.StoreId)
this.navCtrl.push(BusinessFormPage,{StoreId: StoreId, customerDtl: this.customerDtl});
else
    this.navCtrl.push(BusinessFormPage, {customerDtl: this.customerDtl});
  }
  ionViewDidLeave(){
   // this.navCtrl.popToRoot();
   }

























funcvalid(){
   //I think you also have to do a setTimeout here.
    // this.render.setElementClass(this.quantityUnitCodeElementRef.nativeElement.children[0], 'ng-invalid', false);
    // this.render.setElementClass(this.quantityUnitCodeElementRef.nativeElement.children[0], 'ng-valid', true);
}
}
