import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { Global } from './global';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
private url:string;
  constructor(
    private http: HttpClient
    
    ) {
      this.url=Global.url;
     }


  getAddresses():Observable<any>{
    return this.http.get(this.url+'/address/getAddressesCurrentUser');
  }
  addAddress(form: any):Observable<any>{
    const body={
       Street: form.street, 
       Number:form.number,
       ZipCode:form.zipCode,
       State:form.state,
       City:form.city,
       Country:form.country
    }
    console.log("called from: addAddress method in Address service");
    return this.http.post(this.url+'/address/addAddress', body);
  }
}
