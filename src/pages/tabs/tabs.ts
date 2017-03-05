import { Component } from '@angular/core';

import { FoodShopPage } from '../food-shop/food-shop';
import { BasketPage } from '../basket/basket';
import { OrderedPage } from '../ordered/ordered';
import { LikesPage } from '../likes/likes';
import { AccountPage } from '../account/account';
import { SellFoodPage } from '../seller-sell-food/seller-sell-food';
import { FoodOnSalePage } from '../seller-food-on-sale/seller-food-on-sale';
import { SellerStatisticPage } from '../seller-statistic/seller-statistic';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FoodShopPage;
  tab2Root: any = BasketPage;
  tab3Root: any = LikesPage;
  tab4Root: any = AccountPage;
  tab5Root: any = SellFoodPage;
  tab6Root: any = FoodOnSalePage;
  tab7Root: any = SellerStatisticPage;

  constructor() {

  }
}
