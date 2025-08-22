import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);

  public _isAuthenticated = false;
  public _userId = '';

  authenticateLoginApi(data: { email: string, password: string }) {
    const url = `http://localhost:3000/users/login`;
    return this.http.post<{ id: string }>(url, data);
  }

  getUserIdFromApi(email: string) {
    const url = `http://localhost:3000/user/id`;
    return this.http.post<{ id: string }>(url, email);
  }

  updateAuthenticationStatus(status: boolean) {
    this._isAuthenticated = status;
  }

  updateUserId(newId: string) {
    this._userId = newId;
  }  
}
