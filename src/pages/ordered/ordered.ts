import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ordered',
  templateUrl: 'ordered.html'
})
export class OrderedPage {

data = [];

//Example JSON data to iterate data, logic depends on the data from Mongo Collections
foods =[{
food:'Nasi Goreng',
price:'RM10',
date:'Monday, 1 January 2017'
},{
food:'Nasi Goreng Thailand',
price:'RM7',
date:'Monday, 1 January 2017'
},{
food:'Burger Mamak',
price:'RM3',
date:'Tuesday, 15 January 2017'
},{
food:'Nasi Putih Belacan',
price:'RM6',
date:'Wednesday, 20 January 2017'
},{
food:'Mee Maggie',
price:'RM2',
date:'Thursday, 22 January 2017'
},{
food:'Nasi Cicak Pedas',
price:'RM7',
date:'Friday, 29 January 2017'
}];

  constructor(public navCtrl: NavController) {

    for(let j=0; j<this.foods.length; j++){
      this.data.push({
      date: this.foods[j]['date'],
      price: this.foods[j]['price'],
      foodName:this.foods[j]['food'],
      image:'images/food5.jpg',
      icon: 'ios-arrow-forward',
      showDetails: false

      });
    }
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-arrow-forward';
    } else {
        data.showDetails = true;
        data.icon = 'ios-arrow-down';
    }
  }

}

//Sample Code for reference
// data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

//   constructor(public navCtrl: NavController) {
    
//     for(let i = 0; i < 10; i++ ){
//       this.data.push({
//           title: 'Title '+i,
//           details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//           icon: 'ios-add-circle-outline',
//           showDetails: false
//         });
//     }
//   }

//   toggleDetails(data) {
//     if (data.showDetails) {
//         data.showDetails = false;
//         data.icon = 'ios-add-circle-outline';
//     } else {
//         data.showDetails = true;
//         data.icon = 'ios-remove-circle-outline';
//     }
//   }
