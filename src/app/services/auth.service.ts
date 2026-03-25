import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from '../interfaces/authlogininfo.interface';
import { JwtResponse } from '../interfaces/jwt-response.interface';

const TOKEN_KEY = 'AuthToken';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000/api';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  signIn(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      `${this.URL}/auth/signin`,
      credentials,
      httpOptions,
    );
  }

  signUp(usuario: any) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.URL}/auth/signup`, authData)
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token == null) {
      return false;
    }

    return true;
    // const expira =Number(localStorage.getItem('expira'));
    // const expiraDate = new Date();
    // expiraDate.setTime(expira);

    // if(expiraDate > new Date()) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
