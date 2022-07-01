import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AddressModel} from "../models/address.model";


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http :HttpClient) { }
  getAll():Observable<Array<AddressModel>>{
    return this.http.get<Array<AddressModel>>(`${environment.apiUrl}/addresses`)
  }

}
