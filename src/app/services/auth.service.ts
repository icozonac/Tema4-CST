import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly serverUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  registerUser() {
    return this.http.post(this.serverUrl + '/users', null, {
      responseType: 'text',
    });
  }
}
