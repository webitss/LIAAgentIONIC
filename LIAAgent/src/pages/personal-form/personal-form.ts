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
    first_name: new FormControl(),
    id: new FormControl("", [Validators.maxLength(9), Validators.minLength(9)]),
    phoneNumber: new FormControl("",this.service.isAtLeastOne ? null : ([Validators.required ,Validators.maxLength(9), Validators.minLength(9)])),
    address: new FormControl(),
    email: new FormControl("",  Validators.email),
    //callPhone: new FormControl()
     callPhone: new FormControl("",this.service.isAtLeastOne ? null : [Validators.required ,Validators.maxLength(10), Validators.minLength(10)])
} );
  StoreId:number;
  StoreOwnerObj: any;
  customerDtl: storeOwnerModel;


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LiaService) {
    this.StoreId = navParams.data.StoreId;
    this.getStorOfCustomerDetailsArray();
    service.nowComponent="טופס הזמנה";
//this.testFunction();

  }

customValidationFunction(formGroup): any {
   let nameField = formGroup.controls['name'].value; //access any of your form fields like this
   return (nameField.length < 5) ? { nameLengthFive: true } : null;
}


  ngOnInit() {
     this.frmPersonal.valueChanges.subscribe((value: any) => {
     //this.testFunction1();
    console.log(value);
    if(value.callPhone.length ==10||value.phoneNumber.length==9)
    {

    this.service.isAtLeastOne=true;
    console.log("value.phoneNumber "+value.phoneNumber+",value.callNumber "+value.callPhone);
  }
  console.log(this.service.isAtLeastOne);
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
