import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private logedin = new BehaviorSubject<boolean>(this.tokenService.loggedIn())

  authStatus=this.logedin.asObservable();

  constructor(private tokenService:TokenService) { }
  changeStatus(value:boolean){
    this.logedin.next(value);
  }
}
