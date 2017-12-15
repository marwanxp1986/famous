import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipesProvider {
  private url:string;

  constructor(public http: Http) {
    this.url ="http://localhost/tabkh/api.php";
    console.log('Hello RecipesProvider Provider');
  }

  getCategory(){
    return this.http.get(this.url+"?action=getrecipes").map(res=>res.json())
   }
}
