import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'navBar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navbarComponent.css']


})
export class navBar {
    public title: string;
    public options: string[];
    public isLoggedIn: boolean;
    public person = localStorage.getItem("person");
    public currentUser: Person;

    searchForm = new FormGroup({
        keyword: new FormControl('', Validators.required)
      });
    

    constructor(
        public authenticationService: AuthenticationService, 
        private _router: Router,
        ) {
        this.title = "Louigis";
        this.options = ["Home", "Products", "favourites"];//we eill get this options from the database later
        this.authenticationService.currentPerson.subscribe(x => {
            if (x) {
                console.log("x value in if:"+x);
                this.currentUser = x;
                this.isLoggedIn=true;
            }else{
                console.log("x value in else:"+x);
                this.isLoggedIn=false;
            }
        }
        );

    }
    searchProducts(): void{
        if (this.searchForm.valid) {
            console.log("form is valid");
            this._router.navigate(['/products/'+this.searchForm.value.keyword]);
        }
    }


}