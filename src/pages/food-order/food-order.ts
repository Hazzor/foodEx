import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FoodOrder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food-order',
  templateUrl: 'food-order.html'
})
export class FoodOrderPage {

quantity : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quantity = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodOrderPage');
  }

  itemMinus(){
    
    if (this.quantity > 1){
      this.quantity = this.quantity - 1;
       
    }

    else if (this.quantity =1) {
      this.quantity =1;
    }
    console.log(this.quantity);
  }

  itemPlus(){
    this.quantity = this.quantity + 1;
    console.log(this.quantity);
  }

  

}
