import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  public url: string;
  public id: number;
  constructor(
    private _http: HttpClient
  ) {
    this.url=Global.url; 
   }

}
