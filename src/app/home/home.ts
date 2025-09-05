import { Component, computed, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/user.type';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  constructor(private userService: UserService) {}

  userItem = signal<User>({ id: '', email: '', name: '' });

  get signedAuthStatus() {
    return this.userService._isAuthenticated
      ? true : false;
  }

  message = computed(() => 
    this.userService._isAuthenticated ? 'User logged in ' : 'User not logged in'
  );

  ngOnInit(): void {
    this.userItem.set(this.userService._userObject);
  }
}
