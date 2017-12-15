import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginProvider:LoginProvider ) {
  }

  ngOnInit(){
    this.loginProvider.getCategory().subscribe(
      data => {
        this.email =data.email
        console.log(data);
      },error =>{
        console.log(error);
      }
    )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
