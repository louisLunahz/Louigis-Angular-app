import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import {Product} from '../models/product';


@Injectable()
export class ProductService{
    public url: string;
    constructor( 
        private _http: HttpClient
        
    ){      
        this.url=Global.url; 
    }




    getProducts(): Observable<any>{
    return this._http.get(this.url+'/product', {headers:{skip:"true"}});
    }

    getProductById(id: number): Observable<any>{
        return this._http.get(this.url+'/product/'+id,  {headers:{skip:"true"}});
    }

    addProductToFavourites(id: number){
        return this._http.post(this.url+'/person/addFavourite', id);
    }

    getFavourites(): Observable<any>{
        return this._http.get(this.url+'/person/getFavourites');
    }
    delProductFromFav(id: number): Observable<any>{
        return this._http.delete(this.url+'/person/deleteProductFromFavourites', {params: {id_product: id}});
    }

    

  
      

    
   

}
