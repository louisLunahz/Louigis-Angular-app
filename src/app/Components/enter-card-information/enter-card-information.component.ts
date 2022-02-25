import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Receipt } from 'src/app/models/receipt';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-enter-card-information',
  templateUrl: './enter-card-information.component.html',
  styleUrls: ['./enter-card-information.component.css']
})
export class EnterCardInformationComponent implements OnInit {
  private receipt: Receipt; 
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
        next: (data: Receipt)=>{
         this.receipt=data;
         console.log(this.receipt);
         localStorage.setItem("receipt",JSON.stringify(this.receipt));
       
        }, error: (error)=>{
          console.log("Error in function makePayment, componenet: EnterCard");
          console.log(error);
        }, complete: ()=>{
          console.log("payment was done succesfully");
          localStorage.removeItem("id_address");
          this._router.navigate(["reciept"]);
        }
      });
    }
    
    
    
  }


  

}
