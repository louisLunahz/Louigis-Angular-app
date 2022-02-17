import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/Product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: Item[];
  public total: number = 0;


  constructor(private _cartService: CartService,
    private _productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  
    this._cartService.getAllProductsInCart().subscribe(

      {
        next: (data) => {
          this.items = data;
          console.log("items");
          console.log(this.items);
          this.items.forEach((item)=>{
            this.total=this.total+item.individual_total;
          });
        },
        error: (error) => {

        },
        complete: () => {
        }
      }
    );





  }


  deleteProduct(id: number) {

    this.cartService.deleteItemFromCart(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {
       const item= this.items.find(element => element.id==id);
       if(item){
        this.total=this.total-item.individual_total;
       };
       this.items = this.items.filter(item =>
        item.id != id
       );
      }
    });
  }

}
