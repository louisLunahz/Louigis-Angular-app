import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/Product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() parent: string;
  @Output () onDelete: EventEmitter<number>= new EventEmitter();
  @Output () onAddToFav: EventEmitter<number> = new EventEmitter();
  @Output () onAddProductToCart:EventEmitter<number> = new EventEmitter();

  constructor(
    private _route: ActivatedRoute,
    private __router: Router, 
    private _productService: ProductService
  
  ) { }

  ngOnInit(): void {
   
  }
  addToFavourites(id: number) {
    this.onAddToFav.emit(id);
    
  }
  deleteFromFavourites(id: number){
    this.onDelete.emit(id);
  }

  addProductToCart(id: number){
    this.onAddProductToCart.emit(id);
  }

  
}
