import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent  {
  public imgSrc: string;


  @Input () currentUser: Person;


  constructor(private authenticationService: AuthenticationService,
              private router:Router) { 
    this.imgSrc="https://img.icons8.com/ios-filled/50/000000/user.png";
  
  }



  

  logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }




 


}
