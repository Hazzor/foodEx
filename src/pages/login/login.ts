import { Component } from '@angular/core';
import { NavController, NavParams,ViewController, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController,  private modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp(){
    let signUp = this.modalCtrl.create(SignupPage);
    signUp.present();
  }

}
