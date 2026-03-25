import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

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

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  constructor(private token: TokenStorageService, private router: Router, private data: DataService) {
    this.data.getPerfilPsicologo()
      .subscribe(resp =>{
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

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }

}
