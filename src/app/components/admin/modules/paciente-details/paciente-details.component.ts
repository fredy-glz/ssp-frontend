import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.component.html',
  styleUrls: ['./paciente-details.component.css']
})
export class PacienteDetailsComponent implements OnInit {
  public id
  public imgURL = null;
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private routeA: ActivatedRoute, private data: DataService, public validadores:ValidatorsService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.id = this.routeA.snapshot.paramMap.get('id');
    this.data.getPacienteAdmin(this.id)
      .subscribe(resp => {
        this.cargarData(resp);
      })
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

  cargarData(resp) {
    if(resp.image != null){
      this.imgURL = btoa(
        resp.image.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    }
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

}
