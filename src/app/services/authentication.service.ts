import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/Person.model';
import { Global } from '../services/global';
import { map, tap } from 'rxjs/operators';
import { LoginCredentials } from '../models/login-credentials';
import { RequestResponse } from '../models/request-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public url: string; 
  public currentPersonSubject: BehaviorSubject<Person| null>;
  public currentPerson: Observable<Person | null>;
  

  constructor
  (
    private http: HttpClient, 
  ) 
  {

    this.url = Global.url;
    const personValue:string | null=localStorage.getItem('person');
    if(personValue){
      this.currentPersonSubject = new BehaviorSubject<Person | null>(JSON.parse(personValue));
      this.currentPerson = this.currentPersonSubject.asObservable();
    }else{
      this.currentPersonSubject = new BehaviorSubject<Person | null>(null);
      this.currentPerson = this.currentPersonSubject.asObservable();
    }
  }


  login(credentials: LoginCredentials) {
    const body: LoginCredentials = {
      email: credentials.email,
      password: credentials.password,
    }

    return this.http.post<any>(
      this.url+'/person/authenticate',body, {
        headers:{skip:"true"},
        withCredentials:true,
      }, 
    ).pipe(
      tap((receivedData: RequestResponse) => console.log(receivedData)),
      map((receivedData: RequestResponse) => {
        const person= new Person(
          receivedData.person.Id,
          receivedData.person.FirstName,
          receivedData.person.LastName,
          receivedData.person.PhoneNumber,
          receivedData.person.Email,
          receivedData.person.DateOfBirth,
          receivedData.person.Role,
          receivedData.token,
        )
        this.currentPersonSubject.next(person);
        return person;
      }
    
    ),
    )

  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('person');
    this.currentPersonSubject.next( null );
    

  }

  public get currentPersonValue(): Person | null |undefined {
    console.log("current person subject value: ");
    console.log(this.currentPersonSubject.value);
    return this.currentPersonSubject.value;
}

public get userName():string | undefined{
  return this.currentPersonSubject.value?.FirstName;
}




}
