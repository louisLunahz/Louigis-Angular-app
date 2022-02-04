import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {
public address: Address; 
  constructor(private _personService: PersonService) { }

  ngOnInit(): void {
    this._personService.getAddress().subscribe({
      next: (dataAddress)=>{
        this.address=dataAddress;
      console.log(this.address);
      }
    });
  }



}
