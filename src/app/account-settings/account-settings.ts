import { Component, OnInit, signal } from '@angular/core';
import { LoginService } from '../services/login-service';
import { catchError, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  imports: [FormsModule],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.css'
})
export class AccountSettings implements OnInit{
  constructor(private loginService: LoginService, private router: Router) {}

  userItem = signal({
    id: '',
    email: '',
    name: ''
  });

  authError = false;
  isChangeable = false;

  toggleEdit() {
    this.isChangeable = !this.isChangeable;
  }

  onSubmit(form: any) {
    if (form.invalid) return;

    const userData = {
      name: form.value.name
    };
    console.log(userData);
    this.loginService.updateUserInfo(userData).subscribe({
      next: async () => {
        this.loginService.updateUserName(userData.name);
      }
    });
  }

  setUser(newUser: User) {
    this.loginService.updateUserObject(newUser);
  }

  ngOnInit(): void {
    this.userItem.set(this.loginService._userObject);
  }
}

// not ready