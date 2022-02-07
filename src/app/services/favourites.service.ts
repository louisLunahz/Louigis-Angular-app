import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Global} from '../services/global'; 
@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
private url: string;
  constructor(  private _http: HttpClient
    ) { 
      this.url=Global.url; 
    }


  addProductToFavourites(id: number){
    return this._http.post(this.url+'/favourites/addFavourite', id);
}

getFavourites(): Observable<any>{
    return this._http.get(this.url+'/favourites/getFavourites');
}
delProductFromFav(id: number): Observable<any>{
    return this._http.delete(this.url+'/favourites/deleteProductFromFavourites', {params: {id_product: id}});
}
}
