import { storeOwnerModel } from './storeOwnerModel';
import { LoginModel } from "./loginModel";
import { customerCategoriesModel } from './customerCategories';

export class customerDetailsModel{
      StoreId :number
      StoreName :string
      HP :string
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
      User :LoginModel
      Owner :storeOwnerModel

}