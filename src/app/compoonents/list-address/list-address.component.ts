import { Component, OnInit } from '@angular/core';
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }
  getAllAddresses(){
    this.addressService.getAll().subscribe(res=>{
      console.log(res);
    })
  }

}
