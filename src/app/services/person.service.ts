import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../models/address';
import { Person } from '../models/Person.model';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  registerCustomer(person: any) {
    const body = {
      FirstName:person.firstName,
      LastName:person.lastName,
      PhoneNumber:person.phoneNumber,
      Email: person.email,
      Pass: person.pass,
      DateOfBirth:person.dateOfBirth,
      Role:1,
    }
    console.log("body:");
    console.log(body);
    return this._http.post(this.url + '/person/register', body,{headers:{skip:"true"}});

  }

  getPersonData(data: any){
    return this._http.get(this.url + '/person/getInfo');
  }
  getAddress(): Observable<any>{
   return this._http.get<any>(this.url+'/address/getAddressCurrentUser');
  }
}