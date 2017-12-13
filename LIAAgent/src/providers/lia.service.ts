import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { Injectable } from "@angular/core";
import { LiaProxy } from "./proxy";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { customerModel } from "../models/customer";


@Injectable()
export class LiaService {
          //#region  variables
            customerDetailsArray:any;
            indexCustomer:number=0;
            isNowInPageLogin:boolean;
            package: any;
            packages: any;
            galeryPictures: any;
            source: String;
            getData: any;
            products: any;
            customers: customerModel[];
            customerDetails:any;
            nowComponent: string;
            product: any;
            thisProductDetails: any;
            isOuter: boolean;
            isInner: boolean;
            isPackageProductDetailed: boolean;
            packageProduct: any;
            countProductsInCart: number = 0;
            productsOfCart: any;
            packagesOfCart: any[];
            isPayed: boolean;
            isTerminateOrdered: boolean;
            anotherDetails: boolean;
            routeOrStay: string;
            packageProd1: any;
            packageProd2: any;
            packageProd3: any;
            c:customerModel;


  //#endregion
   constructor(private proxy: LiaProxy) {
          //#region initialize
            this.isNowInPageLogin=true;
            this.galeryPictures = new Array();
            this.products = new Array();
            this.customers = [];
            this.packageProd1 = new Array();
            this.packageProd2 = new Array();
            this.packageProd3 = new Array();
            //this.customers[3] = { name: "ttt", address: "t", num: 1, another: "jjjjj" };
            this.nowComponent = "menu";
            this.packages = new Array();
            this.productsOfCart = new Array();
            this.post("GetGaleryPictures");
            this.post("GetAdditionalProducts");
            this.post("GetPackages");
            this.post("GetBaseStores");
            this.postPackageProd(1);
            this.postPackageProd(2);
            this.postPackageProd(3);
            this.isPackageProductDetailed = false;
            this.isOuter = true;
            this.isInner = false;
            this.productsOfCart = this.products;
            this.isPayed = false;
            this.isTerminateOrdered = false;
            this.customerDetails=new Array();
            this.customerDetailsArray=new Array();
            this.indexCustomer=0;
            //#endregion
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
                .catch(() => console.log("error"));
            }



//#endregion

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

//#region postStoreDetails

fill(){
    
     this.customerDetailsArray[this.indexCustomer][1]=this.customerDetails[1];
     this.indexCustomer++;
}
    async postStoreDetails1(storeId: Number): Promise<any> {
             await this.proxy
            .postStoreDetails(storeId)
            .then(res => {
                this.getData = res;
                this.customerDetails[0]=storeId;
                this.customerDetailsArray[this.indexCustomer][0]=storeId;
                this.customerDetailsArray[this.indexCustomer][1]=new Array();
                this.customerDetails[1]= this.getData.Result;
                this.fill();
           
            
            })
                .catch(() => console.log("error"));
      
       console.log(this.customerDetailsArray);
    }

    postStoreDetails(storeId: Number)
    {
        let flag=false;
        for(let i=0;i<this.customerDetailsArray.length;i++)
        {
            if(this.customerDetailsArray[i][0]==storeId)
            {
                    this.customerDetails= this.customerDetailsArray[i];
                    flag=true;
                    break;
            }
        }
        if(flag==false)
        {
             this.customerDetailsArray[this.indexCustomer]=new Array();
             this.postStoreDetails1(storeId);
        }
    
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
                i=this.productsOfCart.length;
              }
        console.log(index);
            this.productsOfCart.splice(index, 1);
        if(this.countProductsInCart > 0)
        this.countProductsInCart--;
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
 

