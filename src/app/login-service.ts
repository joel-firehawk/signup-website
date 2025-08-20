import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);

  authenticateLoginApi(data: { name: string, password: string }) {
    const url = `http://localhost:3000/users/login`;
    return this.http.post<{ message: string }>(url, data);
  }
}
