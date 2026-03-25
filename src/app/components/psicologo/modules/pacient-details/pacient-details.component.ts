import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Event } from "../../../../models/event.model";
import { EventService } from 'src/app/services/event.service';
import { DdrConfigurationService } from 'ddr-configuration';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";
import { ValidatorsService } from 'src/app/services/validators.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pacient-details',
  templateUrl: './pacient-details.component.html',
  styleUrls: ['./pacient-details.component.css']
})
export class PacientDetailsComponent implements OnInit, OnDestroy {
  paciente:any = {
    lunes: null,
    martes: null,
    miercoles: null,
    jueves: null,
    viernes: null
  };
  userId: Number;
  formulario: FormGroup;

  public event: Event;
  public showEnd: boolean;
  public today: Date;
  public localeES: any;

  public mode: number;

  public MODE_ADD = 1;
  public MODE_EDIT = 2;

  tomorrow = new Date()
  duracion = new Date()

  constructor(private fb: FormBuilder, private routeA: ActivatedRoute, private data: DataService, public eventService: EventService, private ddrConfiguration: DdrConfigurationService, private route: Router, private auth: AuthService, public validadores: ValidatorsService) {
    this.event = this.eventService.eventToEdit
    this.tomorrow.setDate(this.tomorrow.getDate() + 1)
    this.duracion.setHours(3,0,0,0)

    this.formulario = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      start: [new Date(), Validators.required],
      duracion: [this.duracion, Validators.required],
      end: [''],
      className: ['', Validators.required],
      description: ['', Validators.required],
      pacienteId: [this.routeA.snapshot.paramMap.get('id'), Validators.required],
      conAgenda: [true, Validators.required]
    })

    this.today = new Date();
    this.addOrEdit()
    this.localeES = this.ddrConfiguration.getData("locale");
  }

  ngOnInit(): void {
    const id = this.routeA.snapshot.paramMap.get('id');
    this.data.getPaciente(id)
      .subscribe(resp => {
        this.paciente = resp;
      })
  }

  addOrEdit() {
    if(this.eventService.eventToEdit){
      this.formulario.reset({
        id: this.eventService.eventToEdit.id,
        title: this.eventService.eventToEdit.title,
        start: new Date(this.eventService.eventToEdit.start),
        duracion: new Date(this.eventService.eventToEdit.duracion),
        end: new Date(this.eventService.eventToEdit.end),
        className: this.eventService.eventToEdit.className,
        description: this.eventService.eventToEdit.description,
        pacienteId: this.routeA.snapshot.paramMap.get('id'),
        conAgenda: true
      });
      this.showEnd = true
    }

  }

  addEditEvent() {
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
    if (this.eventService.eventToEdit) {
      this.editEvent();
    } else {
      this.addEvent();
    }


  }

  editEvent() {
    this.event = this.formulario.value
    this.eventService.editEvent(this.event)
      .subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Cita actualizada',
          text: 'La cita se actualizo correctamente'
        });
        this.route.navigateByUrl('/psicologo/mispacientes')
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error,
        })
      })

  }

  addEvent() {
    this.event = this.formulario.value
    this.eventService.addEvent(this.event)
      .subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Cita agendada',
          text: 'La cita se registro correctamente'
        });
        this.route.navigateByUrl('/psicologo/mispacientes')
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error,
        })
      })

  }

  ngOnDestroy() {
    this.eventService.eventToEdit = null;
  }

}
