import { Event } from './../models/event.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public eventToEdit: Event;

  constructor(
    private http: HttpClient
  ) { }

  editEvent(evento: Event) {
    // Formateo la fecha
    evento.start = new Date(moment(evento.start).format('YYYY-MM-DDTHH:mm'));
    evento.end = new Date( evento.start)
    evento.end.setHours(evento.end.getHours() + evento.duracion.getHours())

    return this.http.put('http://localhost:3000/api/paciente/actualizarcita', evento, httpOptions);
  }

  deleteEvent(id: string, patientId) {
    return this.http.delete(`http://localhost:3000/api/paciente/eliminarcita/${id}`, httpOptions);
  }

  addEvent(evento: Event) {
    // Formateo la fecha
    evento.start = new Date(moment(evento.start).format('YYYY-MM-DDTHH:mm'));
    evento.end = new Date( evento.start)
    evento.end.setHours(evento.end.getHours() + evento.duracion.getHours())
    return this.http.post<Event>('http://localhost:3000/api/paciente/agendarcita', evento, httpOptions);
  }

  getEvents(): Observable<Event[]>  {
    return this.http.get<Event[]>('http://localhost:3000/api/alumno/miscitas')
  }

  getEventsById(id): Observable<Event[]>{
    return this.http.get<Event[]>(`http://localhost:3000/api/alumno/miscitas/${id}`)
  }
}
