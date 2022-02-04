import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input () address: Address;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if(this.address){
      console.log("address is not null");
    }else{
      console.log("addres is null");
    }
  }

  goToPayment(){
    this._router.navigate(['/payment']);
  }

}
