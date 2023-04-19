import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'https://blog.rexcoders.in/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'customer/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'auth/login',
      {
        username,
        password
      }
      // httpOptions
    );
  }

  register(username: string, email: string, name:string ,password: string, mobile: string, state:string , city: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'user/post',
      {
        username,
        name,
        email,
        password,
        mobile,
        state,
        city

      }
      // httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API , {});
  }
}



