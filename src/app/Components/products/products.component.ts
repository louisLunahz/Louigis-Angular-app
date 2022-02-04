import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/Product.service';
import { Product } from '../../models/product';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public toSearch: string="";


  constructor(
    private _productService: ProductService,
    private _cartService: CartService, 
    private _route: ActivatedRoute,
    private _router: Router,
  ) {

  }

  ngOnInit() {
    this._route.params.subscribe({
      next: (params: Params)=>{
        if(params['wordToSearch']){
          this.toSearch=params['wordToSearch'];
        }
        this._productService.getProducts().subscribe(

          {
            next: (data) => {
              this.products=data;
            this.products= this.filterProducts(this.toSearch, this.products);
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
    });

  


  }

  addToFavourites(id: number) {
    this._productService.addProductToFavourites(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        alert("Product added to favourites");
      }
    });
  }

  AddProductToCart(id: number) {
    this._cartService.addProdutToCart(id, 1).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("success");
        alert("Product was added to the cart");
      }
    });
  }

  filterProducts(word: string, products: Product[]){
   const productsFiltered= [];
    for(const product of products){
      if(product.name.toLocaleLowerCase().indexOf(word.toLocaleLowerCase())>-1){
        productsFiltered.push(product);
      }
    }
    return productsFiltered;
  }

}
