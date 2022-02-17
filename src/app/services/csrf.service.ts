import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class CSRFService {
  public url: string;
  constructor(private _http: HttpClient) {
     this.url = Global.url;
   }


  getAntiForgeryToken(): Observable<any>{
    return this._http.get("https://louisdesktop/antiforgerytoken",{ withCredentials: true });
  }
}

