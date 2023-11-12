import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }



  login(email: string, password: string): Observable<any> {
    const requstBody = {
      email,
      password
    };
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login', requstBody)
  }


  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token)
  }


  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token')
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = null;

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
