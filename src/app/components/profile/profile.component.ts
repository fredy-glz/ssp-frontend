import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { isThisQuarter } from 'date-fns';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public selectedFile: any;
  private imgURL = null;
  formulario: FormGroup;
  auth: string[]
  userInfo = {
    image: null,
    email: null,
    nombre: null,
    primerApellido: null,
    segundoApellido: null
  }

  constructor(private fb: FormBuilder, private token : TokenStorageService, private router: Router, private data: DataService, public validadores: ValidatorsService) {
    this.auth = token.getAuthorities()
    this.crearFormulario();
    if(this.auth[0] === 'ROLE_ALUMNO') {
      this.data.getPerfilPaciente()
      .subscribe(resp => {
        if(resp.image != null){
          this.imgURL = btoa(
            resp.image.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
        }
        this.userInfo = {
          image: this.imgURL,
          email: resp.email,
          nombre:  resp.nombre,
          primerApellido: resp.primerApellido,
          segundoApellido: resp.segundoApellido
        }
        this.cargarDataPaciente(resp)
      })
    }
    else {
      this.data.getPerfilPsicologo()
      .subscribe(resp =>{
        if(resp.image != null){
          this.imgURL = btoa(
            resp.image.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
        }
        this.userInfo = {
          image: this.imgURL,
          email: resp.email,
          nombre:  resp.nombre,
          primerApellido: resp.primerApellido,
          segundoApellido: resp.segundoApellido
        }
        this.cargarDataPsicologo(resp)
    })
    }
  }

  ngOnInit(): void {
  }

  fileUpload(event) {
    this.selectedFile = event.target.files[0];
    const data: FormData = new FormData();
    data.append( 'image', this.selectedFile);
    event.preventDefault();
    if(this.auth[0] === 'ROLE_ALUMNO') {
      this.data.updateImageProfilePaciente(data)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Foto de perfil actualizada',
          text: 'La foto se guardo correctamente!',
          showConfirmButton: false,
          timer: 5000
        })
        window.location.reload();
      })
    } else {
      this.data.updateImageProfilePsicologo(data)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Foto de perfil actualizada',
          text: 'La foto se guardo correctamente!',
          showConfirmButton: false,
          timer: 5000
        })
        window.location.reload();
      });
    }
  }

  crearFormulario(){
    this.formulario = this.fb.group({
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
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@ugto.mx$')] ]
    });
  }

  cargarDataPaciente(resp) {
    this.formulario.reset({
      nombre: resp.nombre,
      primerApellido: resp.primerApellido,
      segundoApellido: resp.segundoApellido,
      nua: resp.nua,
      edad: resp.edad,
      estadoCivil: resp.estadoCivil,
      fechaNacimiento: resp.fechaNacimiento,
      ciudadNacimiento: resp.ciudadNacimiento,
      estadoNacimiento: resp.estadoNacimiento,
      campus_enms: resp.campus_enms,
      division_sede: resp.division_sede,
      programaEducativo: resp.programaEducativo,
      periodo: resp.periodo,
      grado: resp.grado,
      grupo: resp.grupo,
      tipoPeriodo: resp.tipoPeriodo,
      telefonoCelular: resp.telefonoCelular,
      telefonoCasaCiudad: resp.telefonoCasaCiudad,
      telefonoCasaOrigen: resp.telefonoCasaOrigen,
      calleDomicilioCiudad: resp.calleDomicilioCiudad,
      numeroDomicilioCiudad: resp.numeroDomicilioCiudad,
      coloniaDomicilioCiudad: resp.coloniaDomicilioCiudad,
      cpDomicilioCiudad: resp.cpDomicilioCiudad,
      localidadDomicilioCiudad: resp.localidadDomicilioCiudad,
      ciudadDomicilioCiudad: resp.ciudadDomicilioCiudad,
      estadoDomicilioCiudad: resp.estadoDomicilioCiudad,
      calleDomicilioOrigen: resp.calleDomicilioOrigen,
      numeroDomicilioOrigen: resp.numeroDomicilioOrigen,
      coloniaDomicilioOrigen: resp.coloniaDomicilioOrigen,
      cpDomicilioOrigen: resp.cpDomicilioOrigen,
      localidadDomicilioOrigen: resp.localidadDomicilioOrigen,
      ciudadDomicilioOrigen: resp.ciudadDomicilioOrigen,
      estadoDomicilioOrigen: resp.estadoDomicilioOrigen,
      nombreC: resp.patient_contacts[0].nombre,
      primerApellidoC: resp.patient_contacts[0].primerApellido,
      segundoApellidoC: resp.patient_contacts[0].segundoApellido,
      telefonoCelularC: resp.patient_contacts[0].telefonoCelular,
      telefonoCasaC: resp.patient_contacts[0].telefonoCasa,
      calleDomicilioC: resp.patient_contacts[0].calleDomicilio,
      numeroDomicilioC: resp.patient_contacts[0].numeroDomicilio,
      coloniaDomicilioC: resp.patient_contacts[0].coloniaDomicilio,
      cpDomicilioC: resp.patient_contacts[0].cpDomicilio,
      localidadDomicilioC: resp.patient_contacts[0].localidadDomicilio,
      ciudadDomicilioC: resp.patient_contacts[0].ciudadDomicilio,
      estadoDomicilioC: resp.patient_contacts[0].estadoDomicilio,
      lunes: resp.patient_schedules[0].lunes,
      martes: resp.patient_schedules[0].martes,
      miercoles: resp.patient_schedules[0].miercoles,
      jueves: resp.patient_schedules[0].jueves,
      viernes: resp.patient_schedules[0].viernes,
      email: resp.email
    });
  }

  cargarDataPsicologo(resp) {
    this.formulario.reset({
      nombre: resp.nombre,
      primerApellido: resp.primerApellido,
      segundoApellido: resp.segundoApellido,
      edad: resp.edad,
      estadoCivil: resp.estadoCivil,
      fechaNacimiento: resp.fechaNacimiento,
      ciudadNacimiento: resp.ciudadNacimiento,
      estadoNacimiento: resp.estadoNacimiento,
      campus_enms: resp.campus_enms,
      division_sede: resp.division_sede,
      programaEducativo: resp.programaEducativo,
      periodo: resp.periodo,
      grado: resp.grado,
      grupo: resp.grupo,
      tipoPeriodo: resp.tipoPeriodo,
      telefonoCelular: resp.telefonoCelular,
      telefonoCasaCiudad: resp.telefonoCasa,
      calleDomicilioCiudad: resp.calleDomicilio,
      numeroDomicilioCiudad: resp.numeroDomicilio,
      coloniaDomicilioCiudad: resp.coloniaDomicilio,
      cpDomicilioCiudad: resp.cpDomicilio,
      localidadDomicilioCiudad: resp.localidadDomicilio,
      ciudadDomicilioCiudad: resp.ciudadDomicilio,
      estadoDomicilioCiudad: resp.estadoDomicilio,
      email: resp.email
    });
  }

  guardar() {
    if(this.auth[0] === 'ROLE_ALUMNO'){
      this.data.updateProfilePaciente(this.formulario.value)
        .subscribe(resp => {
          Swal.fire({
            icon: 'success',
            title: 'Usuario actualizado',
            text: 'El usuario se actualizo correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload();
        })
    } else {
      this.data.updateProfilePsicologo(this.formulario.value)
        .subscribe(resp => {
          Swal.fire({
            icon: 'success',
            title: 'Usuario actualizado',
            text: 'El usuario se actualizo correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload();
        })
    }
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }


}
