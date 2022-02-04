import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   console.log("authGuard service");
    const  currentUser = this.authenticationService.currentPersonValue;
    if(currentUser==null){
      console.log("there is no sessions");
      this.router.navigate(['/']);
      return false;
    }
    console.log("there is already a session");
    return true;
    
    
  }
}
