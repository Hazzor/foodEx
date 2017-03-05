import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
// import { NgZone } from 'angular2/core';


/*
  Generated class for the SellFood page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sell-food',
  templateUrl: 'seller-sell-food.html'
})
export class SellFoodPage {

  public base64Image : string;
  image;

  addPickup: boolean = false;
  pickUpPlace:string;
  pickupPlace = "";
  Icon:string = "ios-arrow-forward";
  locations : Array<any> = [
    {venue:'KK3', checked: true}, 
    {venue:'KK4', checked: true}];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  // make sure only the ticked venue is updated and Pickup Time
  // make sure to vaildate the location before push to the array

  addPickupLocation(){
    if(!this.addPickup){
      this.addPickup = true;
      this.Icon = "ios-arrow-down";
    }
    else {
      this.addPickup = false;
      this.Icon = "ios-arrow-forward";
    }
  }

  addPickupLocation2(){

    if (this.pickupPlace == ""){
        let alert = this.alertCtrl.create({message : 'Dun leave it blank'});
        alert.present();
      }
    else {
      this.locations.push({venue:this.pickupPlace, checked:true});

    }
   
      

      
      this.pickupPlace = "";

  }

   takePhoto(){
    Camera.getPicture({
      destinationType:Camera.DestinationType.FILE_URI,
      targetWidth:1000,
      targetHeight:1000
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  

}
