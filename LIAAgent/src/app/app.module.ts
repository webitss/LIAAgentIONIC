import { ProductsPage } from './../pages/products/products';
import { LiaProxy } from './../providers/proxy';

import { HttpClientModule } from '@angular/common/http';
import { GalleryPage } from './../pages/gallery/gallery';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../pages/login/login.component';
import { LiaService } from '../providers/lia.service';
import { PackagePage } from '../pages/package/package';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { CustomersPage } from '../pages/customers/customers';
import { CartPage } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    LoginComponent,
    PackagePage,
    AllPackagesPage,
    ProductsPage,
    CustomersPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
     HttpClientModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GalleryPage,
    LoginComponent,
    PackagePage,
    AllPackagesPage,
    ProductsPage,
    CustomersPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LiaProxy,
    LiaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
