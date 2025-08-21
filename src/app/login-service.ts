import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);

  public isAuthenticated = false;

  authenticateLoginApi(data: { email: string, password: string }) {
    const url = `http://localhost:3000/users/login`;
    return this.http.post<{ message: string }>(url, data);
  }

  updateAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }
}
