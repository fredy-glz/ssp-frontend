import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  adminInfo = {
    email: null,
    nombre: null,
    primerApellido: null,
    segundoApellido: null
  }

  constructor(private data: DataService) {
    this.PerfilPsicologo()
   }

  ngOnInit(): void {
  }

  async PerfilPsicologo() {
    await this.data.getPerfilPsicologo()
    .subscribe(resp =>{
      this.adminInfo = {
        email: resp.email,
        nombre:  resp.nombre,
        primerApellido: resp.primerApellido,
        segundoApellido: resp.segundoApellido
      }
    })
  }

}
