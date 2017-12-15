import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html'
})
export class partnersPage {
  title :string;
  idcategory:number;
  recipes:Array<any>;

  constructor(public navCtrl: NavController,private navParams:NavParams) {

  }

  ngOnInit(){
   this.title = this.navParams.get('title');
   this.idcategory = this.navParams.get('idcategory');

  }

}