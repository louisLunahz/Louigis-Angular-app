import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CSRFInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private xsrfTokenExtractor: HttpXsrfTokenExtractor,
    private authenticationService:AuthenticationService, 
    private cookieService: CookieService
    ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("the CSRF interceptor is being called");

    let x_xsrfToken =localStorage.getItem('X-XSRF-TOKEN');

    if (x_xsrfToken) {
      console.log("currentUser :true");
      const authorizedRequest = req.clone({
      withCredentials: true,
       setHeaders:{
         'X-XSRF-TOKEN': x_xsrfToken,
      }
      });

      return next.handle(authorizedRequest);
    } else {
      console.log("currentUser :false");
      return next.handle(req);
    }
  }
  
}
