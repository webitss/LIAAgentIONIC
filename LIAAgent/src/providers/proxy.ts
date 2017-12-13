import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { LoginModel } from "../models/loginModel";

declare var configWebit: { baseUrl: string };

@Injectable()
export class LiaProxy {
  body: any;

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

  post(func: string): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {
        iUserId: "1",
        nvGuide: "45D49511-BED0-483E-9A50-789612BD6F8C"
      })
      .toPromise();
  }


  // postLogin(func: string, obj: LoginModel): Promise<any> {
  //     return this.http
  //       .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {
  //         "obj": {
  //           "Cellphone": "0501111111",
  //           "Password": "123456",
  //         }

  //       })
  //       .toPromise();
  //     }

  postLogin(func: string, obj: LoginModel): Promise<any> {
    return this.http
      .post(`http://ws.webit-track.com/LiaWS_QA/Agents.svc/${func}`, {

obj

      })
      .toPromise();
    }

}

// load() {
//   return this.http.get(`https://api.myjson.com/bins/1f2zdf`).toPromise();
// }

// getPackages() {
//   return this.http.get(`https://api.myjson.com/bins/k0ud3`).toPromise();
// }
