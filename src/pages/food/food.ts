import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { FoodOrderPage } from '../food-order/food-order';

import { SellerInfosPage } from '../seller-infos/seller-infos';

import { ViewSellerInfoPage } from '../view-seller-info/view-seller-info';

import { AboutPage } from '../about/about';


@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
 food
//  postMessage : boolean = false;
  constructor(public navCtrl: NavController, private modalPage:ModalController) {
    this.food = "Lunch"
  }

  foodClicked(){
    this.navCtrl.push(FoodOrderPage);
    
  }

  openInfo(){
    this.navCtrl.push(ViewSellerInfoPage);
  }

  postStatus(){
    // let postStatus = this.modalPage.create(AboutPage);
    // postStatus.present();
    this.navCtrl.push(AboutPage);
    // this.postMessage = true;

  }

}
