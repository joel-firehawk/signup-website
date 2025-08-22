import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private loginService: LoginService, private router: Router) {}

  authError = false;
  newId = '';

  onSubmit(form: any) {
    if (form.invalid) return;

    const userData = {
      email: form.value.email,
      password: form.value.password
    };

    this.loginService.authenticateLoginApi(userData).subscribe({
      next: (response) => {
        console.log(response.id);
        this.toggleAuth();
        this.setId(response.id)
        form.resetForm();
        this.router.navigate(['']);
      },
      error: err => {
        this.authError = true;
        console.error('Login error:', err);
      }
    });
  }

  toggleAuth() {
    this.loginService.updateAuthenticationStatus(!this.loginService._isAuthenticated);
  }

  setId(newId: string) {
    this.loginService.updateUserId(newId);
  }
}
