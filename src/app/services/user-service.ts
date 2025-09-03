import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);

  public _isAuthenticated = false;
  public _userId = '';
  public _userObject: User = {
    id: '',
    email: '',
    name: ''
  };

  authenticateLoginApi(data: { email: string, password: string }) {
    const url = `http://localhost:3000/users/login`;
    return this.http.post<{ id: string }>(url, data);
  }

  getUserFromApi() {
    const url = `http://localhost:3000/users/${this._userId}`;
    return this.http.get<{ data: User }>(url);
  }

  updateUserInfo( data: { name: string }){
    const url = `http://localhost:3000/users/${this._userId}`;
    return this.http.put(url, data);
  }

  updateAuthenticationStatus(status: boolean) {
    this._isAuthenticated = status;
  }

  updateUserId(newId: string) {
    this._userId = newId;
  }

  updateUserObject(newObject: User) {
    this._userObject = newObject;
  }

  updateUserName(newName: string) {
    this._userObject.name = newName;
  }
}
