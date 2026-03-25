import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  x: number = 1;
  formulario: FormGroup;
  userInfo = {
    email: null,
    nombre: null,
    primerApellido: null,
    segundoApellido: null
  }

  constructor(private fb: FormBuilder, private token: TokenStorageService, private router: Router, private data: DataService) {
    this.crearFormulario()
    this.cargarFormulario()
   }

  ngOnInit(): void {
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

  crearFormulario() {
    this.formulario = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      pregunta10: ['', Validators.required],
      pregunta11: ['', Validators.required],
      pregunta12: ['', Validators.required],
      pregunta13: ['', Validators.required],
      pregunta14: ['', Validators.required],
      pregunta15: ['', Validators.required],
      pregunta16: ['', Validators.required],
      pregunta17: ['', Validators.required],
      pregunta18: ['', Validators.required],
      pregunta19: ['', Validators.required],
      pregunta20: ['', Validators.required],
      pregunta21: ['', Validators.required],
      pregunta22: ['', Validators.required],
      pregunta23: ['', Validators.required],
      pregunta24: ['', Validators.required],
      pregunta25: ['', Validators.required],
      pregunta26: ['', Validators.required],
      pregunta27: ['', Validators.required],
      pregunta28: ['', Validators.required],
      pregunta29: ['', Validators.required],
      pregunta30: ['', Validators.required],
      pregunta31: ['', Validators.required],
      pregunta32: ['', Validators.required],
      pregunta33: ['', Validators.required],
      pregunta34: ['', Validators.required],
      pregunta35: ['', Validators.required],
      pregunta36: ['', Validators.required],
      pregunta37: ['', Validators.required],
      pregunta38: ['', Validators.required],
      pregunta39: ['', Validators.required],
      pregunta40: ['', Validators.required],
      pregunta41: ['', Validators.required],
      pregunta42: ['', Validators.required],
      pregunta43: ['', Validators.required],
      pregunta44: ['', Validators.required],
      pregunta45: ['', Validators.required],
      pregunta46: ['', Validators.required],
      pregunta47: ['', Validators.required],
      pregunta48: ['', Validators.required],
      pregunta49: ['', Validators.required],
      pregunta50: ['', Validators.required],
      pregunta51: ['', Validators.required],
      pregunta52: ['', Validators.required],
      pregunta53: ['', Validators.required],
      pregunta54: ['', Validators.required],
      pregunta55: ['', Validators.required],
      pregunta56: ['', Validators.required],
      pregunta57: ['', Validators.required],
      pregunta58: ['', Validators.required],
      pregunta59: ['', Validators.required],
      pregunta60: ['', Validators.required],
      pregunta61: ['', Validators.required],
      pregunta62: ['', Validators.required],
      pregunta63: ['', Validators.required],
      pregunta64: ['', Validators.required],
      pregunta65: ['', Validators.required],
      pregunta66: ['', Validators.required],
      pregunta67: ['', Validators.required],
      pregunta68: ['', Validators.required],
      pregunta69: ['', Validators.required],
      pregunta70: ['', Validators.required],
      pregunta71: ['', Validators.required],
      pregunta72: ['', Validators.required],
      pregunta73: ['', Validators.required],
      pregunta74: ['', Validators.required],
      pregunta75: ['', Validators.required],
      pregunta76: ['', Validators.required],
      pregunta77: ['', Validators.required],
      pregunta78: ['', Validators.required],
      pregunta79: ['', Validators.required],
      pregunta80: ['', Validators.required],
      pregunta81: ['', Validators.required],
      pregunta82: ['', Validators.required],
      pregunta83: ['', Validators.required],
      pregunta84: ['', Validators.required],
      pregunta85: ['', Validators.required],
      pregunta86: ['', Validators.required],
      pregunta87: ['', Validators.required],
      pregunta88: ['', Validators.required],
      pregunta89: ['', Validators.required],
      pregunta90: ['', Validators.required]
    });
  }

  cargarFormulario(){
    this.formulario.reset({
      pregunta1: 0,
      pregunta2: 1,
      pregunta3: 2,
      pregunta4: 3,
      pregunta5: 4,
      pregunta6: 0,
      pregunta7: 1,
      pregunta8: 2,
      pregunta9: 3,
      pregunta10: 4,
      pregunta11: 0,
      pregunta12: 1,
      pregunta13: 2,
      pregunta14: 3,
      pregunta15: 4,
      pregunta16: 0,
      pregunta17: 1,
      pregunta18: 2,
      pregunta19: 3,
      pregunta20: 4,
      pregunta21: 0,
      pregunta22: 1,
      pregunta23: 2,
      pregunta24: 3,
      pregunta25: 4,
      pregunta26: 0,
      pregunta27: 1,
      pregunta28: 2,
      pregunta29: 3,
      pregunta30: 4,
      pregunta31: 0,
      pregunta32: 1,
      pregunta33: 2,
      pregunta34: 3,
      pregunta35: 4,
      pregunta36: 0,
      pregunta37: 1,
      pregunta38: 2,
      pregunta39: 3,
      pregunta40: 4,
      pregunta41: 0,
      pregunta42: 1,
      pregunta43: 2,
      pregunta44: 3,
      pregunta45: 4,
      pregunta46: 0,
      pregunta47: 1,
      pregunta48: 2,
      pregunta49: 3,
      pregunta50: 4,
      pregunta51: 0,
      pregunta52: 1,
      pregunta53: 2,
      pregunta54: 3,
      pregunta55: 4,
      pregunta56: 0,
      pregunta57: 1,
      pregunta58: 2,
      pregunta59: 3,
      pregunta60: 4,
      pregunta61: 0,
      pregunta62: 1,
      pregunta63: 2,
      pregunta64: 3,
      pregunta65: 4,
      pregunta66: 0,
      pregunta67: 1,
      pregunta68: 2,
      pregunta69: 3,
      pregunta70: 4,
      pregunta71: 0,
      pregunta72: 1,
      pregunta73: 2,
      pregunta74: 3,
      pregunta75: 4,
      pregunta76: 0,
      pregunta77: 1,
      pregunta78: 2,
      pregunta79: 3,
      pregunta80: 4,
      pregunta81: 0,
      pregunta82: 1,
      pregunta83: 2,
      pregunta84: 3,
      pregunta85: 4,
      pregunta86: 0,
      pregunta87: 1,
      pregunta88: 2,
      pregunta89: 3,
      pregunta90: 4
    });
  }

  guardar(){
    this.data.addCuestionario(this.formulario.value)
      .subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Cuestionario registrado',
          text: 'El cuestionario se registro exitosamente!'
        });
        this.router.navigateByUrl('/schedule')
      })
  }

  form_radion(num: number){
    this.x = num;
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }

}
