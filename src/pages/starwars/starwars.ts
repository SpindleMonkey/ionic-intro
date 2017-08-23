import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
//import { } from 'cordova-plugin-http';

@Component({
  selector: 'page-starwars',
  templateUrl: 'starwars.html'
})
export class StarwarsPage implements OnInit{

  character;

  constructor(
    public navCtrl: NavController,
    private http: HTTP) {

  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/3', {}, {})
      .then(response => {
        console.log(response.data);
        this.character = 'a mystery guest';
      })
      .catch(error => {
        console.log(error);
      });
  }

}
