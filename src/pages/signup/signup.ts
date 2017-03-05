import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController, private viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

//close the signup page if user tak jadi signup
  closePage(){
    this.viewCtrl.dismiss();

  }

}
