import { Component, computed } from '@angular/core';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private loginService: LoginService) {}

  message = computed(() => 
    this.loginService._isAuthenticated ? 'User logged in: ' + this.loginService._userId : 'User not logged in'
  );
}
