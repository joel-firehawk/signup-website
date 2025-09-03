import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/user-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private loginService: LoginService) {}

  get signedInEmail() {
    return this.loginService._isAuthenticated
      ? this.loginService._userObject.email
      : 'Log in';
  }
}
