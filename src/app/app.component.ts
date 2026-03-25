import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
import { DataService } from './services/data.service';
const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modulo-Psicologia';
  bandera: Boolean;

  constructor(private auth: AuthService, private router: Router, private token: TokenStorageService, private data: DataService) {
  }

  get tokenExist() {
    return this.token.getToken();
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }
}
