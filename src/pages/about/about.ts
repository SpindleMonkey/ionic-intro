import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  flavor;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController) {

  }

  showChoices(e) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      subTitle: `Really? You like ${this.flavor}?`,
      buttons: ['YES!', 'Well...']
    });
    
    alert.present();
  }

}
