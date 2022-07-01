import { Component, OnInit } from '@angular/core';
import {AddressService} from "../../services/address.service";
import {AddressModel} from "../../models/address.model";
import {observable, Observable} from "rxjs";

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {
  addresses$!: Observable<Array<AddressModel>>;
  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }
  getAllAddresses(){
    this.addresses$= this.addressService.getAll()

  }

}
