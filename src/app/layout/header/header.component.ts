import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  signInClick(): void{
    this.authService.signIn();
  }

  signOutClick(): void{
    this.authService.signOut();
    this.router.navigate(['']);
  }
}
