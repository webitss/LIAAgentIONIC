import { storeOwnerModel } from './storeOwnerModel';
import { LoginModel } from "./loginModel";
import { customerCategoriesModel } from './customerCategories';
import { UserObj } from './UserObj';
import { OrderItemsHistory } from './OrderItemsHistory';

export class customerDetailsModel{
      StoreId :number
      StoreName :string
      PackageId:number
      PackageName: string
      HP :string
      Category:any
      Categories :customerCategoriesModel[]
      Address:string
      City :string
      Phone :string
      Lat :number
      Long :number
      OpenHours :string
      MoreDetails :string
      MinPriceToTicket :number
      LogoUrl :string
      LogoData :string
      LogoExtension :string
      User : UserObj
      Owner :storeOwnerModel
      OrderItemsHistory:OrderItemsHistory[]


}
