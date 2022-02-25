import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  @Output () onAddressAdded: EventEmitter<number>= new EventEmitter();
  
  addressForm = new FormGroup({
    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),

    

  });
  constructor(
    private _addressService: AddressService,
    private router: Router,
  
  ) { }

  ngOnInit(): void {
  }

  addAddress(){
    if(this.addressForm.valid){
      console.log("address form is valid");
      this._addressService.addAddress(this.addressForm.value).subscribe({
        next:(response)=>{
          console.log(response);
        }, 
        error:(error)=>{
          console.log(error);
        }, 
        complete:()=>{
          this.onAddressAdded.emit();
         
        }
      });
    }
  }

}
