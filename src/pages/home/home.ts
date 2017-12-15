import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RecipesProvider } from '../../providers/recipes/recipes';
import {partnersPage } from '../partners/partners';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorys : string;

  constructor(public navCtrl: NavController,private recipesProvider:RecipesProvider) {

  }

  ngOnInit(){
    this.recipesProvider.getCategory().subscribe(
      data => {
        this.categorys =data.category
        console.log(data);
      },error =>{
        console.log(error);
      }
    )

  }

  opensearch(){
this.navCtrl.push(SearchPage);
  }

  showtecipes(idCate : number,title:string){
//alert(idCate +   " " + title)
this.navCtrl.push(partnersPage,{"idcategory":idCate ,"title":title});
  }

}
