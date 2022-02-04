import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-enter-card-information',
  templateUrl: './enter-card-information.component.html',
  styleUrls: ['./enter-card-information.component.css']
})
export class EnterCardInformationComponent implements OnInit {
  
  cardForm = new FormGroup({
    Number: new FormControl('', Validators.required),
    OwnerName: new FormControl('', Validators.required),
    Month: new FormControl('', Validators.required),
    Year: new FormControl('', Validators.required),
    Cv: new FormControl('', Validators.required),
  });
  constructor(
    private _cartService: CartService, 
    private _router: Router
  ) { }
  

  ngOnInit(): void {
  }

  makePayment(){
    if(!this.cardForm.valid){
     console.log("model is not valid");
    }else{
      this._cartService.makePayment(this.cardForm.value).subscribe({
        next: (data)=>{
          console.log(data);
        }, error: (error)=>{
          console.log(error);
        }, complete: ()=>{
          console.log("payment was done succesfully");
          this._router.navigate(['/reciept']);
        }
      });
    }
    
    
    
  }


  

}
