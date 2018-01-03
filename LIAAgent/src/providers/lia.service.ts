import { productsModel } from './../models/productsModel';
import { athenticateModel } from './../models/athenticateModel';
import { Injectable } from "@angular/core";
import { LiaProxy } from "./proxy";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { LoginModel } from "../models/loginModel";
import { customerDetailsModel } from '../models/customerDetails';
import { customerCategoriesModel } from '../models/customerCategories';
import { packageModel } from '../models/packageModel';
import { customerModel } from '../models/customer';
import { OrderObj } from '../models/OrderObj';
import { UserObj } from '../models/UserObj';

@Injectable()
export class LiaService {
          //#region  variables
          isAtLeastOne:boolean=false;
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
            productsDetails: productsModel[];
            isOuter: boolean;
            isInner: boolean;
            isPackageProductDetailed: boolean;
            packageProduct: productsModel;
            countProductsInCart: number = 0;
            productsOfCart: productsModel[];
            isPayed: boolean;
            isTerminateOrdered: boolean;
            routeOrStay: string;
            packageProd1: productsModel;
            packageProd2: productsModel;
            packageProd3: productsModel;
            categories:customerCategoriesModel[];
            isAuthenticated: athenticateModel;
            userLogin: LoginModel;
            c:customerModel;
            statusCode:any;
            packageInCart:packageModel;
            countPackageInCart:number=0;
            changePackage:boolean = false;
            addProductToCart:boolean = false;
            isAuthenticatedLocal: athenticateModel;
            valueforngif:boolean=true;
         //#endregion
        constructor(private proxy: LiaProxy) {
          //#region initialize
            this.isNowInPageLogin=true;
            this.galeryPictures = new Array();
            this.products = new Array<productsModel>();
            this.customers = [];
            this.packageProd1 = new productsModel;
            this.packageProd2 = new productsModel;
            this.packageProd3 =  new productsModel;
            this.nowComponent = "menu";
            this.packages=[];
            this.productsOfCart = [];
            this.isPackageProductDetailed = false;
            this.isOuter = true;
            this.isInner = false;
            this.isPayed = false;
            this.isTerminateOrdered = false;
            this.customerDetails=new customerDetailsModel;
            this.customerDetailsArray=[];
            this.indexCustomer=0;
            this.categories=[];
            this.userLogin = new LoginModel;
            this.packageInCart=new packageModel;
            this.productsDetails=[];
            this.isAuthenticatedLocal = new athenticateModel;
            this.isAuthenticated =new athenticateModel;

            //#endregion
    }



  //#region  login

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
     if(res.Result){
      this.proxy.authUser.UserId=res.Result.UserId;
      this.proxy.authUser.LoginGuide=res.Result.LoginGuide;
      this.allPosts();
}
      console.log(this.isAuthenticated);
     })
  .catch((error: any) => {console.log(error)
});
  }

setLocalStorage(){
  let key= 'user';
  let value = {'EntityId': this.isAuthenticated.EntityId, 'LoginGuide': this.isAuthenticated.LoginGuide, 'UserId': this.isAuthenticated.UserId, 'UserName': this.isAuthenticated.UserName,'UserType': this.isAuthenticated.UserType};

  let value1 = JSON.stringify(value);

  localStorage.setItem(key, value1);
this.isAuthenticatedLocal=value;
console.log(this.isAuthenticated);
}

async getLocalStorage(){
let value = JSON.parse(localStorage.getItem("user"));
if(value){
this.isAuthenticatedLocal=value;
this.isAuthenticated.EntityId=this.isAuthenticatedLocal.EntityId;
this.isAuthenticated.LoginGuide=this.isAuthenticatedLocal.LoginGuide;
this.isAuthenticated.UserId=this.isAuthenticatedLocal.UserId;
this.isAuthenticated.UserName=this.isAuthenticatedLocal.UserName;
this.isAuthenticated.UserType=this.isAuthenticatedLocal.UserType;
this.proxy.authUser.UserId=this.isAuthenticated.UserId;
this.proxy.authUser.LoginGuide=this.isAuthenticated.LoginGuide;
this.allPosts();
}
}
 //#endregion

    //#region post

            async post(func: string): Promise<any> {
                await this.proxy
                .post(func)
                .then(res => {
                    this.getData = res;
                    console.log("res "+res);
                    switch (func) {
                    case "GetAdditionalProducts":
                        this.products = this.getData.Result;
                        console.log(" this.getData "+ this.getData.Result);
                        break;
                    case "GetPackages":
                        this.packages = this.getData.Result;
                        this.packages[0].packageColor="bg-yellow";
                        this.packages[1].packageColor="bg-pink";
                        this.packages[2].packageColor="bg-green";
                        console.log("this.packages "+this.packages[0]);
                        break;
                    case "GetGaleryPictures":
                        this.galeryPictures = this.getData.Result;
                        break;
                    case "GetBaseStores":
                        this.customers = this.getData.Result;
                        this.customers.forEach(element => {
                            element.expanded=false;
                         });
                        break;
                    }
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
            this.postPackageProd(1);
            this.postPackageProd(2);
            this.postPackageProd(3);
            this.postCategories();
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
if(element != null){
                if(element.StoreId==storeId)
                {
                    this.customerDetails= element;
                            flag=true;

                }
            }});

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
        this.productsDetails[0] = this.products[i];
        i = this.products.length;
      }
  }

  //#endregion

     //#region  cart

  clickAddToCart(pr) {
    this.countProductsInCart++;
    this.productsOfCart.push(pr);
    }

    clickAddPackageToCart(p){
    if(this.countPackageInCart===0){
      this.countPackageInCart++;
      this.countProductsInCart+=this.countPackageInCart;
      this.packageInCart=p;

       }
    else
    if(this.changePackage){
    this.packageInCart=p;
        }
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
//#endregion

     //#region form-bussiness

async createFrmBusiness(storDetails: customerDetailsModel){
  if(this.packageInCart.PackageId){
   storDetails.PackageId=this.packageInCart.PackageId;
  storDetails.PackageName=this.packageInCart.PackageName;
  }
  storDetails.User = new UserObj;

      await this.proxy
      .createStoreDetails(storDetails)
      .then(res => {
        if(res.ErrorCode === 0)
  console.log("הפרטים נשמרו בהצלחה",res.Result);
  else{
  if(res.ErrorCode === -10)
  alert("אינך מורשה ליצור לקוח חדש");
  else
  alert("הנתונים שהזנת שגויים");
  }
      })
      .catch(() => console.log("error"));
    }

    async updateFrmBusiness(storDetails: customerDetailsModel){
      if(this.packageInCart.PackageId){
        storDetails.PackageId=this.packageInCart.PackageId;
       storDetails.PackageName=this.packageInCart.PackageName;
      }
      storDetails.User = new UserObj;
  storDetails.Categories=new Array <customerCategoriesModel>();
  storDetails.Categories[0]=new customerCategoriesModel;
  storDetails.Categories[0].SysTableRowId=5;

      await this.proxy
      .upDateStoreDetails(storDetails)
      .then(res => {
        if(res.ErrorCode === 0)
        console.log("הפרטים עודכנו בהצלחה",res.Result);
        else
  {
        if(res.ErrorCode === -10)
        alert("אינך מורשה לעדכן פרטי לקוח ");
if(res.ErrorCode === -1 || res.ErrorCode === -2)
        alert("תקלה זמנית בשרת, אנא נסה שנית מאוחר יותר");
  }
      })
      .catch(() => console.log("error"));
  }
    //#endregion

     //#region  order

            async creatOrder(storeId): Promise<any> {
            let obj:OrderObj=new OrderObj;
            obj.AgentId=this.isAuthenticated.EntityId;
            obj.StoreId=storeId;
            obj.PackageId=this.packageInCart.PackageId;
            obj.ProductsIDs =  [];
            for(let i=0; i<this.productsOfCart.length; i++){
            obj.ProductsIDs.push({"EntityId":this.productsOfCart[i].ProductId});
            }
            console.log(obj);
            let response = await this.proxy.createOrder(obj);
            return response;
            }
    //#endregion

}

