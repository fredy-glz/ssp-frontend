import { Component, OnInit, Input } from '@angular/core';

import listPlugin from '@fullcalendar/list';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css']
})
export class NextEventsComponent implements OnInit {

  @Input() events: any;
  public options: any;

  constructor() { 
    this.options = {
      plugins: [listPlugin, dayGridPlugin],
      locale: esLocale,
      defaultDate: new Date(),
      defaultView:'listWeek',
      header: {
          center: 'Proximos Eventos'
      },
      editable: false
    };
  }

  ngOnInit(): void {
  }

}
