import { BusinessFormPage } from './../pages/business-form/business-form';
import { PersonalFormPage } from './../pages/personal-form/personal-form';
import { ProductsPage } from './../pages/products/products';
import { LiaProxy } from './../providers/proxy';

import { HttpClientModule } from '@angular/common/http';
import { GalleryPage } from './../pages/gallery/gallery';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LiaService } from '../providers/lia.service';
import { PackagePage } from '../pages/package/package';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { CustomersPage } from '../pages/customers/customers';
import { CartPage } from '../pages/cart/cart';
import { PackageSelectedPage } from '../pages/package-selected/package-selected';
import { FormOfUsePage } from '../pages/form-of-use/form-of-use';
import { PayOptionsPage } from '../pages/pay-options/pay-options';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { PopupPage } from '../pages/popup/popup';
import { EnterPage } from '../pages/enter/enter';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    PackagePage,
    AllPackagesPage,
    ProductsPage,
    CustomersPage,
    CartPage,
    PackageSelectedPage,
    PersonalFormPage,
    BusinessFormPage,
    FormOfUsePage,
    PayOptionsPage,
    ProductDetailsPage,
    PopupPage,
    EnterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    PackagePage,
    AllPackagesPage,
    ProductsPage,
    CustomersPage,
    CartPage,
    PackageSelectedPage,
    PersonalFormPage,
    BusinessFormPage,
    FormOfUsePage,
    PayOptionsPage,
    ProductDetailsPage,
    PopupPage,
    EnterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LiaProxy,
    LiaService,
    //FileUploadOptions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    //FileTransferObject,
    File,
  ]
})
export class AppModule {}
