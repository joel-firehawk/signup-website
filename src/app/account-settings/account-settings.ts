import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
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
  constructor(private userService: UserService, private router: Router) {}

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
    this.userService.updateUserInfo(userData).subscribe({
      next: async () => {
        this.userService.updateUserName(userData.name);
      }
    });
  }

  setUser(newUser: User) {
    this.userService.updateUserObject(newUser);
  }

  ngOnInit(): void {
    this.userItem.set(this.userService._userObject);
  }
}

// not ready