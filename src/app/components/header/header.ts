import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private userService: UserService) {}

  get signedInEmail() {
    return this.userService._isAuthenticated
      ? this.userService._userObject.email
      : 'Log in';
  }

  get authStaus() {
    return this.userService._isAuthenticated ? true : false;
  }
}
