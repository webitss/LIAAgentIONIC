import { productsModel } from './../models/productsModel';
import { athenticateModel } from './../models/athenticateModel';
import { Injectable } from "@angular/core";
import { LiaProxy } from "./proxy";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
// import { customerModel } from "../models/customer";
import { LoginModel } from "../models/loginModel";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { customerDetailsModel } from '../models/customerDetails';
import { customerCategoriesModel } from '../models/customerCategories';
import { packageModel } from '../models/packageModel';

@Injectable()
export class LiaService {
  //#region  variables
  // customerDetailsArray:any;
  // indexCustomer:number=0;
  // isNowInPageLogin: boolean;
  // package: any;
  // packages: any;
  // galeryPictures: any;
  // source: String;
  // getData: any;
  // products: any;
  // customers: any;
  // customerDetails: any;
  // nowComponent: string;
  // product: any;
  // thisProductDetails: any;
  // isOuter: boolean;
  // isInner: boolean;
  // isPackageProductDetailed: boolean;
  // packageProduct: any;
  // countProductsInCart: number = 0;
  // productsOfCart: any;
  // packagesOfCart: any[];
  // isPayed: boolean;
  // isTerminateOrdered: boolean;
  // anotherDetails: boolean;
  // routeOrStay: string;
  // packageProd1: any;
  // packageProd2: any;
  // packageProd3: any;
  // isAuthenticated: any;
  // userLogin: LoginModel;
  // c:customerModel;
  // statusCode:any;



          //#region  variables
          public signatureImage : any;
          public signatureImage1 : any;
            customerDetailsArray:customerDetailsModel[];
            customerDetails:customerDetailsModel;
            indexCustomer:number=0;
            isNowInPageLogin:boolean;
            package: packageModel;
            packages: packageModel[];
            galeryPictures: any;
            source: String;
            getData: any;
            products: productsModel[];
            customers: customerModel[];
            nowComponent: string;
            product: productsModel;
            thisProductDetails: productsModel;
            isOuter: boolean;
            isInner: boolean;
            isPackageProductDetailed: boolean;
            packageProduct: productsModel;
            countProductsInCart: number = 0;
            productsOfCart: productsModel[];
            packagesOfCart: packageModel[];
            isPayed: boolean;
            isTerminateOrdered: boolean;
            anotherDetails: boolean;
            routeOrStay: string;
            packageProd1: productsModel;
            packageProd2: productsModel;
            packageProd3: productsModel;
            categories:customerCategoriesModel[];
            isAuthenticated: athenticateModel;
            userLogin: LoginModel;
            c:customerModel;
            statusCode:any;

         //#endregion
        constructor(private proxy: LiaProxy) {
          //#region initialize
            this.isNowInPageLogin=true;
            this.galeryPictures = new Array();
            this.products =[];
            this.customers = [];
            this.packageProd1 = new productsModel;
            this.packageProd2 = new productsModel;
            this.packageProd3 =  new productsModel;
            this.nowComponent = "menu";
            this.packages=[];
            this.productsOfCart = [];
            this.postPackageProd(1);
            this.postPackageProd(2);
            this.postPackageProd(3);
            this.postCategories();
            this.isPackageProductDetailed = false;
            this.isOuter = true;
            this.isInner = false;
            this.productsOfCart = this.products;
            this.isPayed = false;
            this.isTerminateOrdered = false;
            this.customerDetails=new customerDetailsModel;
            this.customerDetailsArray=[];
            this.indexCustomer=0;
            this.categories=[];
            this.userLogin = new LoginModel;
            this.allPosts();
            //#endregion
    }




  //#login

  async doLogin(frm): Promise<any> {
    this.userLogin.Cellphone = frm.userName;
    this.userLogin.Password = frm.password;
    console.log(this.userLogin);
    console.log("send login to service");
     await this.proxy
.postLogin("CheckLoginApp",this.userLogin )
    .then(res => {
      this.isAuthenticated = res.Result;
      this.statusCode = res.Error.ErrorCode;
      console.log(this.isAuthenticated);
    //  return this.isAuthenticated;
  })
  .catch((error: any) => {console.log("error")
});
  }



//#region post

            async post(func: string): Promise<any> {
                await this.proxy
                .post(func)
                .then(res => {
                    this.getData = res;
                    // for (let i = 0; i < this.getData.Result.length; i++) {
                    switch (func) {
                    case "GetAdditionalProducts":
                        this.products = this.getData.Result;
                        break;
                    case "GetPackages":
                        this.packages = this.getData.Result;
                        break;
                    case "GetGaleryPictures":
                        this.galeryPictures = this.getData.Result;
                        break;
                    case "GetBaseStores":
                        this.customers = this.getData.Result;
                        break;
                    }
                    // }
                })
                .catch((error) => console.log("error"));
            }



 //#region postPackageProd
 async postPackageProd(packageId: Number): Promise<any> {
  await this.proxy
  .postPackageProd(packageId)
  .then(res => {
      this.getData = res;
      switch (packageId) {
      case 1:
          this.packageProd1 = this.getData.Result;
          break;
      case 2:
          this.packageProd2 = this.getData.Result;
          break;
      case 2:
          this.packageProd3 = this.getData.Result;
          break;
      }
  })
  .catch(() => console.log("error"));
}

//#endregion




        allPosts(){
            this.post("GetGaleryPictures");
            this.post("GetAdditionalProducts");
            this.post("GetPackages");
            this.post("GetBaseStores");
        }



        //#region post
                async postCategories(): Promise<any>{
                    await this.proxy.postCategories().then(res=>{
                        this.getData=res;
                        this.categories=this.getData.Result;
                        console.log(this.categories);
                    }).catch(()=>console.log("error"));
                }


        //#region postStoreDetails



            async postStoreDetails1(storeId: Number): Promise<any> {
                    await this.proxy
                    .postStoreDetails(storeId)
                    .then(res => {
                        this.getData = res;
                        // this.customerDetails[0]=storeId;
                        // this.customerDetailsArray[this.indexCustomer][0]=storeId;
                       // this.customerDetailsArray[this.indexCustomer]=[];
                        this.customerDetails= this.getData.Result;
                        this.customerDetailsArray[this.indexCustomer]=this.customerDetails;
                        this.indexCustomer++;
                      })
                        .catch(() => console.log("error"));

       console.log(this.customerDetailsArray);
    }

    postStoreDetails(storeId: Number)
    {
        let flag=false;

        console.log(this.customerDetailsArray);
            this.customerDetailsArray.map(element => {
                console.log(element);
                if(element.StoreId==storeId)
                {
                    this.customerDetails= element;
                            flag=true;

                }
            });

        if(flag==false)
        {             this.postStoreDetails1(storeId);     }

    }

//#endregion

//#region getPackageById
        _signature: string;
        nowpackage1: any;
        getPackageById(id: number): any {
        switch (id) {
            case 1:
            this.nowpackage1 = this.packages[0];
            break;
            case 2:
            this.nowpackage1 = this.packages[1];
            break;
            case 3:
            this.nowpackage1 = this.packages[2];
            break;
        }
        return this.nowpackage1;
        }

  //#endregion

  //#region getPackageProductsById
  nowpackage: any;
  getPackageProductsById(id: number): any {
    switch (id) {
      case 1:
        this.nowpackage = this.packageProd1;
        break;
      case 2:
        this.nowpackage = this.packageProd2;
        break;
      case 3:
        this.nowpackage = this.packageProd3;
        break;
    }
    return this.nowpackage;
  }
  //#endregion

  //#region getProductById

  getProductById(id: number) {
    for (let i = 0; i < this.products.length; i++)
      if (this.products[i].ProductId == id) {
        this.thisProductDetails = this.products[i];
        i = this.products.length;
      }
  }

  //#endregion

  clickAddToCart(pr) {
    this.countProductsInCart++;
    this.productsOfCart.push(pr);
  }
  submitFrmBusiness() {
    this.anotherDetails = true;
  }
  submitFrmPersonal(frm) {
    console.log(frm);
  }
  clickDeleteToCart(id) {
    let index: number;
    for (let i = 0; i < this.productsOfCart.length; i++)
      if (this.productsOfCart[i].ProductId == id) {
        index = i;
        i = this.productsOfCart.length;
      }
    console.log(index);
    this.productsOfCart.splice(index, 1);
    if (this.countProductsInCart > 0) this.countProductsInCart--;
  }
}

//#region garbage-things

// getGalleryPictures(){
//          return this.proxy.post("GetGaleryPictures").then((res)=>{
//          return res.Result;
//      }).catch(() => console.log("error"));

// }

//   async getPackages() {
//     await this.proxy.getPackages().then(res => {
//       this.getData = res;
//       this.packages = this.getData.Result;
//     });
//   }

//   clickDeleteFromCart(pr) {
//     let j;
//     for (let i = 0; i < this.productsOfCart.length; i++) {
//       if (this.productsOfCart[i] == pr) {
//         j = i;
//       }

//     }
//   }

/*packages: any[];
                                    //ListShell<ProductAdditionalObj>
                                    constructor(private proxy: LiaProxy) {
                                        this.galeryPictures=new Array();
                                        this.products=new Array();
                                        this.customers=new Array();
                                    }
                                    source:String;
                                    getData:any;
                                    galeryPictures:any[];
                                    products:any[];
                                    customers:any[];
                                    nowComponent:String;
                                    async post(postFunction:String):Promise<any> {
                                        await this.proxy.post(postFunction).then((res) => {
                                            this.getData=res;
                                            console.log(this.getData);
                                            for (let i=0;i<this.getData.Result.length;i++)
                                            {
                                                switch (postFunction)
                                            {
                                                case "GetAdditionalProducts":
                                                    this.products[i]=this.getData.Result[i];
                                                    console.log(this.products);
                                                    break;
                                                case "GetGaleryPictures" :
                                                    this.galeryPictures[i]=this.getData.Result[i];
                                                    console.log(this.galeryPictures);
                                                    break;
                                            }

                                        }
                                        }).catch(() => console.log("error"));
                                    }
                                    product:any;
                                    getProductById(id:number)
                                    {
                                        for (let i=0;i<this.products.length;i++)
                                        {
                                            console.log(this.products[i].ProductId+" "+id);
                                            if(this.products[i].ProductId==id)
                                            {
                                                this.product=this.products[i];
                                                i=this.products.length;
                                            }
                                        }

                                } */

// async load() {
//     try {
//         await this.proxy.load().then(res=>{
//             this.getData = res;
//             this.galeryPictures = this.getData.Result;
//             console.log(this.galeryPictures);
//         });
//         //this.galeryPictures=pictures;
//         //console.log(pictures);

//     } catch (ex) {
//         console.log(`ex: ${ex}`);
//     }
// }
//#endregion
