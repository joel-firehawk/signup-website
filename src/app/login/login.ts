import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';
import { User } from '../models/user.type';
import { catchError, delay, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private userService: UserService, private router: Router) {}

  authError = false;
  newId = '';

  async onSubmit(form: any) {
    if (form.invalid) return;

    const userData = {
      email: form.value.email,
      password: form.value.password
    };

    this.userService.authenticateLoginApi(userData).subscribe({
      next: async (response) => {
        console.log(response.id);
        this.toggleAuthTrue();
        this.setId(response.id);
        form.resetForm();

        try {
          const responseData: any = await firstValueFrom(
            this.userService.getUserFromApi().pipe(
              catchError((err) => {
                console.log(err);
                throw err;
              })
            )
          );
          this.setUser(responseData.data);
          console.log(responseData.data);
        } catch (err) {
          console.error("Error getting user from API", err);
        }

        this.router.navigate(['']);
      },
      error: err => {
        this.authError = true;
        console.error('Login error:', err);
      }
    });
  }

  toggleAuthTrue() {
    this.userService.updateAuthenticationStatus(this.userService._isAuthenticated = true);
  }

  setId(newId: string) {
    this.userService.updateUserId(newId);
  }

  setUser(newUser: User) {
    this.userService.updateUserObject(newUser);
  }
}
