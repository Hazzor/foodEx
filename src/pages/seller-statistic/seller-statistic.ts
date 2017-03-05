import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerNamelistPage } from '../seller-namelist/seller-namelist';

/*
  Generated class for the SellerStatistic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-seller-statistic',
  templateUrl: 'seller-statistic.html'
})
export class SellerStatisticPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerStatisticPage');
  }

  openNameList(){
    this.navCtrl.push(SellerNamelistPage);

  }

}
