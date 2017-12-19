import { athenticateModel } from './../models/athenticateModel';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { LoginModel } from "../models/loginModel";
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { errorHandler } from "@angular/platform-browser/src/browser";
import { customerDetailsModel } from '../models/customerDetails';
import { SessionSell } from '../models/SessionShell';


declare var configWebit: { baseUrl: string };

@Injectable()
export class LiaProxy {
  body: any;
  friends:any;
  userObj: SessionSell;

  constructor(private http: HttpClient) {
this.userObj=new SessionSell;
    this.userObj.UserId = 372;
    this.userObj.nvGuide = "98A42241-C752-45E9-A97C-568F7CC5D234";
    this.body = {};
  }

  postStoreDetails(iStoreId: Number): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetStore`, {
        iStoreId: iStoreId,
        iUserId: "372",
        nvGuide: "98A42241-C752-45E9-A97C-568F7CC5D234"
      })
      .toPromise();
  }

  postPackageProd(iPackageId: Number): Promise<any> {
    return this.http
      .post(
        `http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetPackageProducts`,
        {
          iPackageId: iPackageId,
          iUserId: "372",
          nvGuide: "98A42241-C752-45E9-A97C-568F7CC5D234"
        }
      )
      .toPromise();
  }


   postCategories(): Promise<any> {
    return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/GetCategories`, {
      "iLanguageId":2,
      "iUserId": 372,
      "nvGuide": "98A42241-C752-45E9-A97C-568F7CC5D234"

    }
    ).toPromise();
   }

  post(func: string): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {
        iUserId:372 ,
        nvGuide: "98A42241-C752-45E9-A97C-568F7CC5D234"
      })
      .toPromise();
  }

objLogin:athenticateModel;

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
obj.UserId=this.userObj.UserId;
obj.nvGuide=this.userObj.nvGuide;
obj.ReqObj=customerDtl;
  return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/CreateStore`, {

 obj

  }).toPromise();
}

upDateStoreDetails(customerDtl: customerDetailsModel): Promise<any>{
  let obj: SessionSell;
  obj=new SessionSell;
  obj.UserId=this.userObj.UserId;
  obj.nvGuide=this.userObj.nvGuide;
  obj.ReqObj=customerDtl;
  return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/UpdateStore `, {

obj

  }).toPromise();
}

}


// load() {
//   return this.http.get(`https://api.myjson.com/bins/1f2zdf`).toPromise();
// }

// getPackages() {
//   return this.http.get(`https://api.myjson.com/bins/k0ud3`).toPromise();
// }
