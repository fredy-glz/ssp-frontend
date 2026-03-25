import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-psicologo',
  templateUrl: './add-psicologo.component.html',
  styleUrls: ['./add-psicologo.component.css']
})
export class AddPsicologoComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, public validadores: ValidatorsService, private data: DataService) {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      edad: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudadNacimiento: ['', Validators.required],
      estadoNacimiento: ['', Validators.required],
      telefonoCelular: ['', Validators.required],
      telefonoCasa: ['', Validators.required],
      calleDomicilio: ['', Validators.required],
      numeroDomicilio: ['', Validators.required],
      coloniaDomicilio: ['', Validators.required],
      cpDomicilio: ['', Validators.required],
      localidadDomicilio: ['', Validators.required],
      ciudadDomicilio: ['', Validators.required],
      estadoDomicilio: ['', Validators.required],
      email: ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/)] ],
      password2 : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/)] ],
      roles: [["PSICOLOGO"], Validators.required],
    }, {
      validators: this.validadores.passwordsIguales('password', 'password2')
    });
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.formulario.value)
    if (this.formulario.invalid){
      Swal.fire({
        icon: 'warning',
        title: 'Algunos campos incompletos',
        text: 'Asegurece de haber llenado todos los campos'
      });
      return Object.values(this.formulario.controls).forEach(control =>  {
        control.markAsTouched();
      });
    }
    Swal.fire({
      allowOutsideClick: false,
        icon: 'info',
        title: 'Espere por favor...',
    })
    Swal.showLoading();

    this.data.addPsicologo(this.formulario.value)
      .subscribe(resp => {
        console.log('ok')
      })

    Swal.fire({
      icon: 'success',
      title: this.formulario.value.nombre,
      text: 'El usuario se registro correctamente'
    });
  }

}
