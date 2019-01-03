import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

    private _user: Subject<User> = new Subject();
    setUser(show:User):void{
      localStorage.setItem('User', JSON.stringify(show));
      this._user.next(show);
    }
    getUser():Observable<User>{
      if(this._user == null) {
        this._user.next(JSON.parse(localStorage.getItem('User')));
      }
      return this._user.asObservable();
    }


    //private _token:Subject<string> = new Subject();
    setToken(token:string) {
        localStorage.setItem('_token', token);
        //this._token.next(token);
    }
    getToken():string{
      //if(this._token == null) {
      // this._token.next(localStorage.getItem('_token'));
      //}
      // return this._token;
      return localStorage.getItem('_token');
    }


}
