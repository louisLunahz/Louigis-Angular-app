import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductService } from 'src/app/services/Product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public id: number;
  public product: Product;
  public blnProductWasAddedToCart: boolean=false;
  constructor(
    private _cartService: CartService,
    private _favouritesService: FavouritesService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) { }

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
  }


  AddItemtoCart(id: number) {
    console.log("id product: " + id);
    console.log("add item to cart function");
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
