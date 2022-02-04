import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(private authenticationService: AuthenticationService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("error interceptor");
    return next.handle(request).pipe(catchError(err => {
      console.log("this is the error");
      console.log(err);
      if (err.status === 401) {
        // auto logout if 401 response returned frm oapi
        this.authenticationService.logout();
      }
      const error = err.status;
      return throwError(() => error);
    }));
  }


}
