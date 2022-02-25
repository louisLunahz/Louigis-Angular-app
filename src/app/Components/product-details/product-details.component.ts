import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductService } from 'src/app/services/Product.service';
import {AuthenticationService} from 'src/app/services/authentication.service'
import { Person } from 'src/app/models/Person.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public id: number;
  public product: Product;
  public blnProductWasAddedToCart: boolean=false;
  public currentUser: Person;
  public bln_IsLogedIn:boolean;

  constructor(
    private _cartService: CartService,
    private _favouritesService: FavouritesService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    public authenticationService: AuthenticationService

  ) {

    
   }

  itemForm = new FormGroup({
    quantity: new FormControl('1', Validators.required),
  });

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this._productService.getProductById(this.id).subscribe(

      {
        next: (data) => {
          this.product = data;
          console.log("this is the product");
          console.log(this.product);


        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("everything was completed");

        }
      }




    );

    this.authenticationService.currentPerson.subscribe(x => {
      if (x) {
          console.log("x value in if:"+x);
          this.currentUser = x;
          this.bln_IsLogedIn=true;
      }else{
          console.log("x value in else:"+x);
          this.bln_IsLogedIn=false;
      }
  }
  );
  }


  AddItemtoCart(id: number) {
    if(!this.bln_IsLogedIn){
     
   this._router.navigate(['/login']);
      return;
    }
    if (this.itemForm.valid) {
      console.log("item form is valid");
      console.log(this.itemForm);
      this._cartService.addProdutToCart(id, this.itemForm.value.quantity).subscribe({
        next: (data) => {
          console.log("it is entering the next method");
          console.log(data);
        },
        error: (error) => {
          if(error==401){
           this._router.navigate(['/login']);
          }
       

        },
        complete: () => {
          console.log("success");
          this.blnProductWasAddedToCart=true;
          setInterval(()=>{
            this.blnProductWasAddedToCart=false;
          }, 2000);
          
        }
      });


    } else {
      console.log("item form is not valid");
    }

  }

  AddItemToFavourites(id: number){
    if(!this.bln_IsLogedIn){
      console.log("user is not loged in ");
      this._router.navigate(['/login']);
      return;
    }
    this._favouritesService.addProductToFavourites(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        alert("Product was added to favourites");
      }
    });
  }


  closeAlert(){
    this.blnProductWasAddedToCart=false;
  }

  

 




}
