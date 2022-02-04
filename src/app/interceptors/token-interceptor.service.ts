import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("token interceptor");    

    console.log("skip tiene: "+req.headers.get("skip"));
    if(req.headers.get("skip")){
      return next.handle(req);
     
    }
    let currentUser = this.authenticationService.currentPersonValue;
    if(currentUser && currentUser.token){
      console.log("this is the token: "+currentUser.token);
       req=req.clone({
        setHeaders:{
          'Authorization': `Bearer ${currentUser.token}`,
        }
      });
     
    }
    return next.handle(req);
    
  }

  
}
