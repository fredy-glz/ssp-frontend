import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { DdrBlockItem, DdrAction } from 'ddr-block-list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mypacient-citas',
  templateUrl: './mypacient-citas.component.html',
  styleUrls: ['./mypacient-citas.component.css']
})
export class MypacientCitasComponent implements OnInit {
  public id

  public blockItems: DdrBlockItem[];

  public EDIT_EVENT: string = "EDIT_EVENT"
  public DELETE_EVENT: string = "DELETE_EVENT"

  constructor(
    private eventService: EventService,
    private router: Router, private routeA: ActivatedRoute) {
    this.blockItems = [];
  }


  ngOnInit(): void {
    this.id = this.routeA.snapshot.paramMap.get('id');
    let actions: DdrAction[] = [
      {
        'label': "Editar evento",
        'value': this.EDIT_EVENT
      },
      {
        'label': "Borrar evento",
        "value": this.DELETE_EVENT
      }
    ];

    this.eventService.getEventsById(this.id).subscribe(events => {

      events = events.sort((e1, e2) => new Date(e2.start).getTime() - new Date(e1.start).getTime());

      events.forEach(event => {

        let blockItem = new DdrBlockItem();
        blockItem.item = event;
        switch (event.className) {
          case 'Normal':
            blockItem.borderColor = '#b868a0';
            break;
          case 'Urgente':
            blockItem.borderColor = '#ed5565';
            break;
          case 'Primera':
            blockItem.borderColor = '#a0d468';
            break;
          case 'Ultima':
            blockItem.borderColor = '#fc9f66';
            break;
        }
        blockItem.actions = actions;

        this.blockItems.push(blockItem);

      })
    });
  }

  getAction($event: DdrAction) {

    switch ($event.value) {
      case this.EDIT_EVENT:
        this.eventService.eventToEdit = $event.item;
        this.router.navigate(['/psicologo/paciente-detalles', this.id]);
        break;
      case this.DELETE_EVENT:
        this.eventService.deleteEvent($event.item.id, $event.item.PatientId)
          .subscribe(resp =>{
            Swal.fire({
              icon: 'success',
              title: 'Cita eliminada',
              text: 'La cita se elimino correctamente'
            });
            this.router.navigate(['/psicologo/mispacientes']);
          })
        break;
    }
  }

  selectItem($event) {
    this.eventService.eventToEdit = $event.item;
    this.router.navigate(['/psicologo/paciente-detalles', this.id]);
  }

}
