import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {
public addresses: Address[];
public bln_showNewAddressForm:boolean=false; 

AddressesForm = new FormGroup({
  address: new FormControl('', Validators.required),

});
  constructor(
    private addresService: AddressService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.bln_showNewAddressForm=false;
    this.addresService.getAddresses().subscribe({
      next: (addresses)=>{
        this.addresses=addresses;
        console.log(addresses);
      }
    });
  }
  addNewAddress(){
    this.bln_showNewAddressForm=true;
  }
 continueToPayment(){
   localStorage.setItem("id_address", this.AddressesForm.value.address);
   console.log("funcion: makePayment");
   console.log("id address: "+ this.AddressesForm.value.address);
   this._router.navigate(['payment']);

 }

  





}
