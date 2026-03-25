import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-psicologo-details',
  templateUrl: './psicologo-details.component.html',
  styleUrls: ['./psicologo-details.component.css']
})
export class PsicologoDetailsComponent implements OnInit {
  public id
  public imgURL = null;
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private routeA: ActivatedRoute, private data: DataService, public validadores:ValidatorsService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.id = this.routeA.snapshot.paramMap.get('id');
    this.data.getPsicologoAdmin(this.id)
      .subscribe(resp => {
        this.cargarData(resp);
      })
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
      campus_enms: ['', Validators.required],
      division_sede: ['', Validators.required],
      programaEducativo: ['', Validators.required],
      periodo: ['', Validators.required],
      grado: ['', Validators.required],
      grupo: ['', Validators.required],
      tipoPeriodo: ['', Validators.required],
      telefonoCelular: ['', Validators.required],
      telefonoCasa: ['', Validators.required],
      calleDomicilioCiudad: ['', Validators.required],
      numeroDomicilioCiudad: ['', Validators.required],
      coloniaDomicilioCiudad: ['', Validators.required],
      cpDomicilioCiudad: ['', Validators.required],
      localidadDomicilioCiudad: ['', Validators.required],
      ciudadDomicilioCiudad: ['', Validators.required],
      estadoDomicilioCiudad: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  cargarData(resp){
    if(resp.image != null){
      this.imgURL = btoa(
        resp.image.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    }
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
      telefonoCasa: resp.telefonoCasa,
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

}
