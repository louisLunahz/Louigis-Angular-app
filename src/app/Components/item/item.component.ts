import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public product: Product;
  @Input() item: Item;
  @Output () onDelete: EventEmitter<number>= new EventEmitter();
  constructor( 
    private productService: ProductService, 
    private cartService: CartService,
    private router: Router) {
   
   }

  ngOnInit(): void {

    if(this.item){
      console.log("item is being recieved");
      this.productService.getProductById(this.item.id_product).subscribe({
        next: (data)=>{
         this.product=data;
         console.log("this is the product");
         console.log(this.product);
      }, 
      error: (error)=>{
        console.log("error in onInit function reading the products ");
          console.log(error);
      }, 
      complete: ()=>{
        console.log("complete functino");
      }
    });
    }else{
      console.log("item not comming");
    }
   
  }

  deleteItemFromCart(id: number){
    this.onDelete.emit(id);

  }

  

}
