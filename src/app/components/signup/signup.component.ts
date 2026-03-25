import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { TokenStorageService } from '../../services/token-storage.service';

import Swal from 'sweetalert2';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { AuthLoginInfo } from '../../interfaces/authlogininfo.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private loginInfo: AuthLoginInfo
  formulario: FormGroup;
  entero: string;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  enterarse = [{ contacto: 'Amigos' }, { contacto: 'Profesores' }, { contacto: 'Canalización vía institucional' }, { contacto: 'Tutor' }, { contacto: 'Impresos' }, { contacto: 'Académicos' }, { contacto: 'Seguridad' }, { contacto: 'Inducción' }, { contacto: 'Otro' }];

  constructor(private fb: FormBuilder, public validadores: ValidatorsService, private auth: AuthService, private router: Router, private tokenStorage: TokenStorageService) {
    this.crearFormulario();
    this.cargarData();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      primerContacto: ['', Validators.required],
      comoSeEntero: this.fb.array([]),
      mesYAnioIngreso: ['', Validators.required],
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      nua: ['', [ Validators.required, Validators.minLength(6) ] ],
      edad: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudadNacimiento: ['', Validators.required],
      estadoNacimiento: ['', Validators.required],
      campus_enms: ['', Validators.required],
      division_sede: ['', Validators.required],
      programaEducativo: ['', Validators.required],
      periodo: ['', Validators.required],
      grado: ['', Validators.required],
      grupo: [''],
      tipoPeriodo: ['', Validators.required],
      telefonoCelular: ['', Validators.required],
      telefonoCasaCiudad: ['', Validators.required],
      telefonoCasaOrigen: ['', Validators.required],
      calleDomicilioCiudad: ['', Validators.required],
      numeroDomicilioCiudad: ['', Validators.required],
      coloniaDomicilioCiudad: ['', Validators.required],
      cpDomicilioCiudad: ['', Validators.required],
      localidadDomicilioCiudad: ['', Validators.required],
      ciudadDomicilioCiudad: ['', Validators.required],
      estadoDomicilioCiudad: ['', Validators.required],
      calleDomicilioOrigen: ['', Validators.required],
      numeroDomicilioOrigen: ['', Validators.required],
      coloniaDomicilioOrigen: ['', Validators.required],
      cpDomicilioOrigen: ['', Validators.required],
      localidadDomicilioOrigen: ['', Validators.required],
      ciudadDomicilioOrigen: ['', Validators.required],
      estadoDomicilioOrigen: ['', Validators.required],
      nombreC: ['', Validators.required],
      primerApellidoC: ['', Validators.required],
      segundoApellidoC: ['', Validators.required],
      telefonoCelularC: ['', Validators.required],
      telefonoCasaC: ['', Validators.required],
      calleDomicilioC: ['', Validators.required],
      numeroDomicilioC: ['', Validators.required],
      coloniaDomicilioC: ['', Validators.required],
      cpDomicilioC: ['', Validators.required],
      localidadDomicilioC: ['', Validators.required],
      ciudadDomicilioC: ['', Validators.required],
      estadoDomicilioC: ['', Validators.required],
      lunes: ['', Validators.required],
      martes: ['', Validators.required],
      miercoles: ['', Validators.required],
      jueves: ['', Validators.required],
      viernes: ['', Validators.required],
      terminosYCondiciones: ['', Validators.required],
      conAgenda: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@ugto.mx$')] ],
      password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/)] ],
      password2 : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/)] ],
      roles: ['', Validators.required],
    }, {
      validators: this.validadores.passwordsIguales('password', 'password2')
    });
  }

  cargarData(){
    this.formulario.reset({
      primerContacto: true,
      mesYAnioIngreso: '2016-08',
      nombre: 'Jose Alfredo',
      primerApellido: 'Romero',
      segundoApellido: 'Gonzalez',
      nua: 146005,
      edad: 22,
      estadoCivil: 'Soltero',
      fechaNacimiento: '1997-10-10',
      ciudadNacimiento: 'Irapuato',
      estadoNacimiento: 'Guanajuato',
      campus_enms: 'Irapuato - Salamanca',
      division_sede: 'Division de ingenierias',
      programaEducativo: 'Ingenieria en sistemas computacionales',
      periodo: 'AGO - DIC 20',
      grado: '9°',
      tipoPeriodo: 'Semestral',
      telefonoCelular: '4622433402',
      telefonoCasaCiudad: '4622433402',
      telefonoCasaOrigen: '4622433402',
      calleDomicilioCiudad: 'Francisco Javier Mina',
      numeroDomicilioCiudad: '407',
      coloniaDomicilioCiudad: 'Constitucion de Apatzingan',
      cpDomicilioCiudad: 36545,
      localidadDomicilioCiudad: 'Irapuato',
      ciudadDomicilioCiudad: 'Irapuato',
      estadoDomicilioCiudad: 'Guanajuato',
      calleDomicilioOrigen: 'Francisco Javier Mina',
      numeroDomicilioOrigen: '407',
      coloniaDomicilioOrigen: 'Constitucion de Apatzingan',
      cpDomicilioOrigen: 36545,
      localidadDomicilioOrigen: 'Irapuato',
      ciudadDomicilioOrigen: 'Irapuato',
      estadoDomicilioOrigen: 'Guanajuato',
      nombreC: 'Faustina',
      primerApellidoC: 'Gonzalez',
      segundoApellidoC: 'Martinez',
      telefonoCelularC: '4621313506',
      telefonoCasaC: '4621313506',
      calleDomicilioC: 'Francisco Javier Mina',
      numeroDomicilioC: '407',
      coloniaDomicilioC: 'Constitucion de Apatzingan',
      cpDomicilioC: 36545,
      localidadDomicilioC: 'Irapuato',
      ciudadDomicilioC: 'Irapuato',
      estadoDomicilioC: 'Guanajuato',
      lunes: '12:00 a 14:00, 16:00 a 18:00',
      martes: '12:00 a 14:00, 16:00 a 18:00',
      miercoles: '12:00 a 14:00, 16:00 a 18:00',
      jueves: '12:00 a 14:00, 16:00 a 18:00',
      viernes: '12:00 a 14:00, 16:00 a 18:00',
      email: 'ja.romerogonzalez@ugto.mx',
      password: 'Xwfd3211',
      password2: 'Xwfd3211',
      roles: ["alumno"],
      conAgenda: false
    });
  }

  guardar(){
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

    this.loginInfo = new AuthLoginInfo(
      this.formulario.value.email,
      this.formulario.value.password);

    this.auth.signUp(this.formulario.value)
      .subscribe(resp => {
        this.auth.signIn(this.loginInfo)
          .subscribe(resp => {
            this.tokenStorage.saveToken(resp.accessToken);
            this.tokenStorage.saveEmail(resp.email);
            this.tokenStorage.saveAuthorities(resp.authorities);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(role =>{
              if(role === 'ROLE_ADMINISTRADOR')
                this.router.navigateByUrl('/admin')
              else if (role === 'ROLE_PSICOLOGO')
                this.router.navigateByUrl('/psicologo')
              else
                this.router.navigateByUrl('/cuestionario')
            })
          })

      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error,
        })
      })

    Swal.fire({
      icon: 'success',
      title: this.formulario.value.nombre,
      text: 'El usuario se registro correctamente'
    });
  }

  onChange(contacto: string, isChecked: boolean) {
    const enteroFormArray = this.formulario.controls.comoSeEntero as FormArray;
    if (isChecked) {
      enteroFormArray.push(new FormControl(contacto));
    } else {
      const index = enteroFormArray.controls.findIndex(x => x.value === contacto);
      enteroFormArray.removeAt(index);
    }
  }

  terminosYCondiciones(){
  }

}
