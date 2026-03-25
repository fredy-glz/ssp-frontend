import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo = {
    email: null,
    nombre: null,
    primerApellido: null,
    segundoApellido: null
  }

  constructor(private token: TokenStorageService, private router: Router, private data: DataService) {
    this.data.getPerfilPaciente()
      .subscribe(resp => {
        this.userInfo = {
          email: resp.email,
          nombre:  resp.nombre,
          primerApellido: resp.primerApellido,
          segundoApellido: resp.segundoApellido
        }
      })
   }

  ngOnInit(): void {
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }

}
