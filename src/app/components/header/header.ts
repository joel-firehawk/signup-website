import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private loginService: LoginService) {}

  get signedInName() {
    return this.loginService._isAuthenticated
      ? this.loginService._userObject.name
      : 'Log in';
  }

  
}
