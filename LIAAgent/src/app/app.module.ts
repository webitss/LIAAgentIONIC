// import { MdSelectDispatcher, SELECT_DIRECTIVES } from 'md/select';
import { Refresher } from 'ionic-angular/components/refresher/refresher';
import { SassHelperComponent } from './../components/sass-helper/sass-helper';
import { ExpandablePage } from './../pages/expandable/expandable';
import { HeaderPage } from './../pages/header/header';
//import { LoginPage } from './../pages/login/login';
import { SignaturePage } from './../pages/signature/signature';
import { BusinessFormPage } from './../pages/business-form/business-form';
import { PersonalFormPage } from './../pages/personal-form/personal-form';
import { ProductsPage } from './../pages/products/products';
import { LiaProxy } from './../providers/proxy';
import { HttpClientModule } from '@angular/common/http';
import { GalleryPage } from './../pages/gallery/gallery';
import { NgModule, ErrorHandler, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Content } from 'ionic-angular';
import { MyApp } from './app.component';
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
import { EnterPage } from '../pages/enter/enter';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LoginPage } from '../pages/login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoPage } from '../pages/video/video';
import { Signature1Page } from '../pages/signature1/signature1';
import { LongPressModule } from 'ionic-long-press';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { FilePath } from '@ionic-native/file-path';
//import { CookieService } from 'ngx-cookie-service';
import { CookieService } from 'ngx-cookie-service';
// import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {Md2SelectModule} from 'md2-select/select';


@NgModule({
  declarations: [
    MyApp,
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
     EnterPage,
     LoginPage,
    HeaderPage,
    SignaturePage,
    FormOfUsePage,
    VideoPage,
    ExpandablePage,
    Signature1Page,
    SassHelperComponent
  ],
  imports: [
    BrowserModule,SignaturePadModule,
    IonicModule.forRoot(MyApp, { scrollAssist: true, autoFocusAssist: false } ),
    //IonicModule.forRoot(MyApp),
    HttpClientModule, FormsModule,ReactiveFormsModule,
    LongPressModule,MatCheckboxModule,MatButtonModule
    // SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
     EnterPage,
      LoginPage,
    HeaderPage,
    SignaturePage,
    FormOfUsePage,
    VideoPage,
    ExpandablePage,
    Signature1Page,
    SassHelperComponent
     ],
    
  providers: [
    StatusBar,
    SplashScreen,
    LiaProxy,
    LiaService,
    CookieService,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    //FileUploadOptions,
    FileTransferObject,
    Camera,
    Keyboard,
    FilePath,
    Refresher,
    Content,
    // SmartAudioProvider


  ],
  
})
export class AppModule {}
