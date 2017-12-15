import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private url:string;

  constructor(public http: Http) {
    this.url ="http://app.famous-marketing.com/api.php";
    console.log('Hello LoginProvider Provider');
  }
  getCategory(){
    return this.http.get(this.url+"?action=login").map(res=>res.json())
   }

}
