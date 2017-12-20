import { LiaService } from './../../providers/lia.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { BusinessFormPage } from '../business-form/business-form';
import { customerDetailsModel } from '../../models/customerDetails';
import { storeOwnerModel } from '../../models/storeOwnerModel';
import { AbstractControlOptions } from '@angular/forms/src/model';




@Component({
  selector: 'page-personal-form',
  templateUrl: 'personal-form.html',
})
export class PersonalFormPage {

  pattern =/^[a-zA-Zא-ת\s]*$/;
  frmPersonal: FormGroup = new FormGroup({
    first_name: new FormControl("", Validators.required),
    id: new FormControl("", [Validators.maxLength(9), Validators.minLength(9)]),
    phoneNumber: new FormControl("", [Validators.required ,Validators.maxLength(9), Validators.minLength(9)]),
    address: new FormControl(),
    email: new FormControl("",  Validators.email),
    callPhone: new FormControl("",[Validators.required ,Validators.maxLength(10), Validators.minLength(10)] )
    // [Validators.required ,Validators.maxLength(10), Validators.minLength(10)]
} );
  StoreId:number;
  StoreOwnerObj: any;
  customerDtl: storeOwnerModel;


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
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

}now:any=0;
  ngOnInit() {
    // this.testFunction1();
    this.frmPersonal.valueChanges.subscribe((value: any) => {
            if(value.callPhone.length ==10){
              this.now++;
                  if(this.now==1){
                  this.frmPersonal.controls["phoneNumber"].clearValidators();
                  this.now++;
                                 }
                  if(this.now==2){
                  this.frmPersonal.controls["phoneNumber"].updateValueAndValidity();
                  this.now++;
                  }
                                            }
            if(value.phoneNumber.length==9){
              this.now++;
              if(this.now==1){
              this.frmPersonal.controls["callPhone"].clearValidators();
              this.now++;
                             }
              if(this.now==2){
              this.frmPersonal.controls["callPhone"].updateValueAndValidity();
              this.now++;
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
this.customerDtl = new storeOwnerModel;
console.log(this.customerDtl.Name);
 this.customerDtl.Name = frm.first_name? frm.first_name : this.customerDtl.Name;
 this.customerDtl.IdNum = frm.id? frm.id : this.StoreOwnerObj.IdNum;
 this.customerDtl.Phone = frm.phoneNumber? frm.phoneNumber : this.StoreOwnerObj.Phone;
 this.customerDtl.Address = frm.address? frm.address : this.StoreOwnerObj.Address;
 this.customerDtl.Email = frm.email? frm.email : this.StoreOwnerObj.Email;
 this.customerDtl.CellPhone = frm.callPhone? frm.callPhone : this.StoreOwnerObj.callPhone;
// this.service.submitFrmPersonal(this.customerDtl);
if(this.StoreId)
this.navCtrl.push(BusinessFormPage,{StoreId: StoreId, customerDtl: this.customerDtl});
else
    this.navCtrl.push(BusinessFormPage, {customerDtl: this.customerDtl});
  }

}
