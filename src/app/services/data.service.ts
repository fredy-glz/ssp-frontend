import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = 'http://localhost:3000/api';
  user: any;

  constructor(private http: HttpClient) { }

  updateImageProfilePaciente(image) {
    return this.http.post('http://localhost:3000/api/user/paciente/profile/image', image);
  }

  updateImageProfilePsicologo(image) {
    return this.http.post('http://localhost:3000/api/user/psicologo/profile/image', image);
  }

  updateProfilePsicologo(data) {
    console.log('admin/psicologo')
    return this.http.post('http://localhost:3000/api/user/psicologo/profile', data);
  }

  updateProfilePaciente(data) {
    console.log('paciente')
    return this.http.post('http://localhost:3000/api/user/paciente/profile', data);
  }

  getPacienteAdmin(id) {
    return this.http.get(`http://localhost:3000/api/admin/paciente/${id}`);
  }

  getPsicologoAdmin(id) {
    return this.http.get(`http://localhost:3000/api/admin/psicologo/${id}`);
  }

  getPacientesAdmin() {
    return this.http.get('http://localhost:3000/api/admin/pacientes');
  }

  getPacientes() {
    return this.http.get('http://localhost:3000/api/pacientes');
  }

  getMisPacientes() {
    return this.http.get('http://localhost:3000/api/mispacientes');
  }

  getPsicologos() {
    return this.http.get('http://localhost:3000/api/psicologos');
  }

  getPaciente(id) {
    return this.http.get(`http://localhost:3000/api/paciente/${id}`);
  }

  getPerfilPsicologo(): Observable<any> {
    return this.http.get('http://localhost:3000/api/psicologo')
  }

  getPerfilPaciente(): Observable<any> {
    return this.http.get('http://localhost:3000/api/patient-profile')
  }

  addPsicologo(formulario) {
    return this.http.post('http://localhost:3000/api/auth/psicologo', formulario)
  }

  addCuestionario(formulario) {
    return this.http.post('http://localhost:3000/api/user/paciente/cuestionario', formulario)
  }

  getSistemas() {
    return this.http.get('http://localhost:3000/api/admin/carreras/sistemas')
  }

  getArtes() {
    return this.http.get('http://localhost:3000/api/admin/carreras/artes')
  }

  getGestion() {
    return this.http.get('http://localhost:3000/api/admin/carreras/gestion')
  }

  getMecanica() {
    return this.http.get('http://localhost:3000/api/admin/carreras/mecanica')
  }

  getElectrica() {
    return this.http.get('http://localhost:3000/api/admin/carreras/electrica')
  }

  getElectronica() {
    return this.http.get('http://localhost:3000/api/admin/carreras/electronica')
  }

}
