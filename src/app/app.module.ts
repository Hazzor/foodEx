import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { BasketPage } from '../pages/basket/basket';
import { AccountPage } from '../pages/account/account';
import { FoodPage } from '../pages/food/food';
import { OrderedPage } from '../pages/ordered/ordered';
import { FoodOrderPage } from '../pages/food-order/food-order';
import { FoodShopPage } from '../pages/food-shop/food-shop';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LikesPage } from '../pages/likes/likes';
import { AboutPage } from '../pages/about/about';

//Seller Pages
import { FoodOnSalePage } from '../pages/seller-food-on-sale/seller-food-on-sale';
import { SellFoodPage } from '../pages/seller-sell-food/seller-sell-food';
import { SellerStatisticPage } from '../pages/seller-statistic/seller-statistic';
import { SellerNamelistPage } from '../pages/seller-namelist/seller-namelist';

import { SellerInfosPage } from '../pages/seller-infos/seller-infos';
import { ViewSellerInfoPage } from '../pages/view-seller-info/view-seller-info';
import { BecomeVendorPage } from '../pages/become-vendor/become-vendor';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    BasketPage,
    AccountPage,
    FoodPage,
    OrderedPage,
    FoodOrderPage,
    FoodShopPage,
    LoginPage,
    SignupPage,
    ContactUsPage,
    LikesPage,
    AboutPage,

    UpdateProfilePage,
    FoodOnSalePage,
    SellFoodPage,
    SellerStatisticPage,
    SellerNamelistPage,
    SellerInfosPage,
    ViewSellerInfoPage,
    BecomeVendorPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasketPage,
    AccountPage,
    FoodPage,
    OrderedPage,
    FoodOrderPage,
    FoodShopPage,
    LoginPage,
    SignupPage,
    UpdateProfilePage,
    ContactUsPage,
    LikesPage,
    AboutPage,

    FoodOnSalePage,
    SellFoodPage,
    SellerStatisticPage,
    SellerNamelistPage,
    SellerInfosPage,
    ViewSellerInfoPage,
    BecomeVendorPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
