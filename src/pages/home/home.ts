import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'Babble Squirrel';

  info = 'Connie says: "I have no idea what I\'ll build for project 4. I just hope it works. A little. And you might want to check out the About page."';

  constructor(public navCtrl: NavController) {

  }

}
