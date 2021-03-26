import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{
  public isAuth = false;
  constructor(private router: Router) { }

  signIn(): void{
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  signOut(): void{
    this.isAuth = false;
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.isAuth) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
