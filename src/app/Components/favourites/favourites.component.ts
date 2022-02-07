import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  public products: Product[];
  constructor(
    private _cartService: CartService, 
    private _favouritesService: FavouritesService
    ) { }

  ngOnInit(): void {
    this._favouritesService.getFavourites().subscribe(

      {
        next: (data) => {
          this.products = data;
          console.log(this.products);

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

  deleteProduct(id: number){
    this._favouritesService.delProductFromFav(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {
       const productToDelete= this.products.find(element => element.id==id);
       this.products = this.products.filter(item =>
        item.id != id
       );
       alert("product deleted from favourites");
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

}
