import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, parseISO } from 'date-fns';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, CalendarEventTitleFormatter, } from 'angular-calendar';
import { EventService } from '../../../../services/event.service';
import { CustomEventTitleFormatter } from './custom-events-title-formatter.provider';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
})
export class EventsComponent {
  closeResult = '';

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  locale: string = 'es';
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  refresh: Subject<any> = new Subject();
  events = []
  activeDayIsOpen: boolean = true;

  constructor(private modalService: NgbModal, private eventService: EventService,) {
    this.eventService.getEvents().subscribe(events => {
      for (let i = 0; i < events.length; i++)
      {
        events[i].start = new Date(events[i].start)
        events[i].end = new Date(events[i].end)
      }
      this.events = events;
      console.log(this.events)
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  handleEvent(action: string, event ): void {
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'lg' });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  externalDrop(event: CalendarEvent) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.events.push(event);
    }
  }

}
