
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { LoginModel } from "../models/loginModel";
//import { Response } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//import { errorHandler } from "@angular/platform-browser/src/browser";
import { customerDetailsModel } from '../models/customerDetails';
import { SessionSell } from '../models/SessionShell';
import { athenticateModel } from './../models/athenticateModel';
import { OrderObj } from "../models/OrderObj";
import { UserObj } from "../models/UserObj";
import { storeOwnerModel } from "../models/storeOwnerModel";



@Injectable()
export class LiaProxy {
  body: any;
  friends:any;
  // userObj: SessionSell;
  authUser:athenticateModel;
  constructor(private http: HttpClient) {
    // this.userObj=new SessionSell;
    // this.userObj.UserId = 372;
    // this.userObj.nvGuide = "98A42241-C752-45E9-A97C-568F7CC5D234";
    this.authUser = new athenticateModel;
    // this.authUser.UserId=372;
    // this.authUser.LoginGuide= "98A42241-C752-45E9-A97C-568F7CC5D234";
    this.body = {};

  }

  postStoreDetails(iStoreId: Number): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetStore`, {
        iStoreId: iStoreId,
        iUserId: this.authUser.UserId,
        nvGuide: this.authUser.LoginGuide
      })
      .toPromise();
  }

  postPackageProd(iPackageId: Number): Promise<any> {
    return this.http
      .post(
      `http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetPackageProducts`,
      {
        iPackageId: iPackageId,
        iUserId: this.authUser.UserId,
        nvGuide: this.authUser.LoginGuide
      }
      )
      .toPromise();
  }


  postCategories(): Promise<any> {
    return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetCategories`, {
      "iLanguageId": 2,
      iUserId: this.authUser.UserId,
      nvGuide: this.authUser.LoginGuide

    }
    ).toPromise();
  }


  post(func: string): Promise<any> {
      return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {
        iUserId: this.authUser.UserId,
        nvGuide: this.authUser.LoginGuide
      })
      .toPromise();
  }

  objLogin: athenticateModel;

  postLogin(func: string, obj: LoginModel): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {

        obj

      })
      .toPromise();
  }


createStoreDetails(customerDtl: customerDetailsModel): Promise<any>{
let obj: SessionSell;
obj=new SessionSell;
obj.UserId=this.authUser.UserId;
obj.nvGuide=this.authUser.LoginGuide;
obj.ReqObj=customerDtl;
// obj.ReqObj.User=new UserObj;
console.log(JSON.stringify(obj));
  return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/CreateStore`, {

      obj

    }).toPromise();
  }


upDateStoreDetails(customerDtl: customerDetailsModel): Promise<any>{
  let obj: SessionSell;
  obj=new SessionSell;
  obj.UserId=this.authUser.UserId;
  obj.nvGuide=this.authUser.LoginGuide;
  obj.ReqObj=customerDtl;
  obj.ReqObj.User=new UserObj;
obj.ReqObj.HP=null;

console.log(JSON.stringify(obj));
  return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/UpdateStore `, {

      obj

    }).toPromise();
  }


  RemoveGuide(): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/RemoveGuide`, {

        iUserId: this.authUser.UserId,
        nvGuide: this.authUser.LoginGuide

      })
      .toPromise();
  }


createOrder(order: OrderObj): Promise<any>{
  let obj: SessionSell;
  obj=new SessionSell;
  obj.UserId=this.authUser.UserId;
  obj.nvGuide=this.authUser.LoginGuide;
  obj.ReqObj=order;
    return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/CreateOrder`, {

      obj

    }).toPromise();
  }


  CreatePDF(orderId, email, customerSignatureData, liaSignatureData): Promise<any>{
    let iUserId=this.authUser.UserId;
    let nvGuide=this.authUser.LoginGuide;
    customerSignatureData=customerSignatureData.replace(/^data:image\/(png|jpg|PNG|JPG);base64,/, "");
    liaSignatureData=liaSignatureData.replace(/^data:image\/(png|jpg|PNG|JPG);base64,/, "");
    return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/CreatePDF`, {

      "iUserId": iUserId,
      "nvGuide": nvGuide,
      "orderId": orderId,
      "email": email,
      "customerSignatureData": customerSignatureData,
      "liaSignatureData": liaSignatureData

          }).toPromise();
  }


}


// load() {
//   return this.http.get(`https://api.myjson.com/bins/1f2zdf`).toPromise();
// }

// getPackages() {
//   return this.http.get(`https://api.myjson.com/bins/k0ud3`).toPromise();
// }
