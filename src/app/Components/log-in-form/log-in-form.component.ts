import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person.model';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {
  person: Person;
  errorMessage: string;
  errorOcurred: boolean;
  
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authenticationService: AuthenticationService,
    private router:Router, 
   
    ) {
    this.errorMessage = "";
    this.errorOcurred = false;
  }


  


  ngOnInit(): void {
    
  }
  
  resetErrorFlag() {
    this.errorOcurred = false;
  }


logIn():void{
  if (this.loginForm.valid) {
    this.authenticationService.login(this.loginForm.value).subscribe({
      next:(resp)=>{
        this.person=resp;
        localStorage.setItem("person", JSON.stringify(resp));
      },
      error: ()=>{
        this.errorOcurred=true;
        this.errorMessage="Incorrect email or password";
      }, 
      complete: ()=>{
        this.router.navigate(['/']);
        
      }
    });
  }
}
 



}



