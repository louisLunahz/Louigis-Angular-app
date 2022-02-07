import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Product } from '../models/product';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public url: string;
  constructor(
    private _http: HttpClient

  ) {
    this.url = Global.url;
  }

  addProdutToCart(id_product: number, quantity: number): Observable<any> {
    const body = {
      quantity: quantity,
      id_product: id_product,
    }
    return this._http.post(this.url + '/cart/AddProductToCart', body);
  }

  getAllProductsInCart():Observable<any>{
    return this._http.get(this.url+'/cart/GetAllItemsInCart');
  }

  deleteItemFromCart(id: number): Observable<any>{
    return this._http.delete(this.url+'/cart/deleteProductFromCart', {params: {id_item: id}});
  }

  makePayment(card: Card): Observable<any>{
    
    const body: Card = {
      IdCard: card.IdCard,
      Number: card.Number, 
      OwnerName: card.OwnerName, 
      Month: card.Month, 
      Year: card.Year, 
      Cv: card.Cv,
    }
    return this._http.post(this.url+'/payment/makePayment', body); 
    
  }



  


}
