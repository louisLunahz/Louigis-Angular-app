import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person.model';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public person: Person;

  constructor(
    private personService: PersonService,
    private router: Router) {


  }
  registerForm = new FormGroup({
    email: new FormControl('', Validators.email),
    pass: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
    ])),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ])),
    dateOfBirth: new FormControl('', Validators.required),

  });


  ngOnInit() {
    this.registerForm.reset();
  }

  register() {

    if (this.registerForm.valid) {
      //call api to register customer
      this.personService.registerCustomer(this.registerForm.value).subscribe({
        next: (data) => {
          if (data == "ok") {
            console.log("customer was registered sucessfully");
            this.router.navigate(['registrationSuccessful']);

          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {

        }

      });

    }

  }
}








