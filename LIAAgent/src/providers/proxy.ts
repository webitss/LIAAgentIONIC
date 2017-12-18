import { athenticateModel } from './../models/athenticateModel';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { LoginModel } from "../models/loginModel";
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { errorHandler } from "@angular/platform-browser/src/browser";


declare var configWebit: { baseUrl: string };

@Injectable()
export class LiaProxy {
  body: any;
  friends:any;

  constructor(private http: HttpClient) {

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

createStoreDetails(): Promise<any>{
  return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/CreateStore`, {
    "obj": {
      "UserId": 372,
      "nvGuide": "98A42241-C752-45E9-A97C-568F7CC5D234",
      "ReqObj": {
        "Address": "הברון הירש 8 8, פתח תקווה, ישראל",
        "Categories": [{"SysTableRowId":5}],
        "Category": null,
        "City": "פתח תקווה",
        "HP": "054784",
        "Lat": 32.089521,
        "LogoData": null,
        "LogoExtension": null,
        "LogoUrl": null,
        "Long": 34.888904,
        "MinPriceToTicket": 200,
        "MoreDetails": "",
        "OpenHours": "א-ה 8:00-16:00",
        "Owner": {},
        "PackageId": null,
        "PackageName": "",
        "Phone": "0544444444",
        "StoreId": null,
        "StoreName": "ניסוי סוכנים",
        "User":  {
          "AllowGetEmail": null,
          "AllowGetPush": null,
          "AppLanguageId": null,
          "DeviceToken": null,
          "DeviceType": null,
          "Email": "",
          "Password": "",
          "UserId": null,
          "UserName": null,
          "UserType": null
        }
      }}
  }
  ).toPromise();
}

}


// load() {
//   return this.http.get(`https://api.myjson.com/bins/1f2zdf`).toPromise();
// }

// getPackages() {
//   return this.http.get(`https://api.myjson.com/bins/k0ud3`).toPromise();
// }
