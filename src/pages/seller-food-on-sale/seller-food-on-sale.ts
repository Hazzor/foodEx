import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, Item, AlertController } from 'ionic-angular';
import { SellFoodPage } from '../seller-sell-food/seller-sell-food';
import { SellerNamelistPage } from '../seller-namelist/seller-namelist';

/*
  Generated class for the FoodOnSale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food-on-sale',
  templateUrl: 'seller-food-on-sale.html',

})
export class FoodOnSalePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {}

  quantity = "";

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodOnSalePage');
  }

  setQuantity(e, value){
    console.log(value);

    if (e.checked == true){
      let askQuantity = this.alertCtrl.create({
        title : 'Set food quantity',
        inputs: [
      {
        name: 'foodQuantity',
        type: 'number',
        placeholder: 'Enter food quantity'
      },
    ],
        buttons : [
          {
        text: 'OK',
        handler: () => {
          console.log('Buy clicked');
          this.quantity = '5';

        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      
    ]
      })

      askQuantity.present();
    }
  }

  // logDrag(item){
  //   // let percent = 1;
  //    let percent = item.getSlidingPercent();
    
  // if (percent > 0) {
  //   // positive
  //   console.log('right side');
  // } else {
  //   // negative
  //   console.log('left side');
  // }
  // if (Math.abs(percent) > 1) {
  //   console.log('overscroll');
  // }
  // }

  viewOrder(){
    this.navCtrl.push(SellerNamelistPage);
  }

  editFood(){
    this.navCtrl.push(SellFoodPage);
  }

   result = document.getElementsByClassName("multi-files");


//    open(itemSlide, item: Item) {
//     // reproduce the slide on the click
//     itemSlide.setElementClass("active-sliding", true);
//     itemSlide.setElementClass("active-slide", true);
//     itemSlide.setElementClass("active-options-right", true);
//     item.setElementStyle("transform", "translate3d(-80px, 0px, 0px)");
// }

//    open() {
//     // reproduce the slide on the click
//     this.result.setCollectionClass("active-sliding", true);
//     this.result.setElementClass("active-slide", true);
//     this.result.setElementClass("active-options-right", true);
//     // item.setElementStyle("transform", "translate3d(-80px, 0px, 0px)");
// }

learnMore(){
  let alert = this.alertCtrl.create({
    title : 'Food Management',
    subTitle : 'If you have freshly-cooked excess food, turn ON the food to ENABLE buyer to buy your food. Turn OFF indicates food OUT OF STOCK' ,
    buttons: ['OK']
  });
  alert.present();

}

sellMore(){
  this.navCtrl.push(SellFoodPage);
}

public close(item: ItemSliding) {
    item.close();
    item.setElementClass("active-sliding", false);
    item.setElementClass("active-slide", false);
    item.setElementClass("active-options-right", false);
}

}
