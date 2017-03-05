import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodPage } from '../food/food';

/*
  Generated class for the FoodShop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food-shop',
  templateUrl: 'food-shop.html'
})
export class FoodShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodShopPage');
  }

itemClicked(){
  this.navCtrl.push(FoodPage)
}
  

}
