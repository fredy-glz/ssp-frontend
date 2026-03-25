import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { EventsComponent } from "./components/schedule/content/events/events.component";
import { DefaultComponent } from './components/admin/layouts/default/default.component';
import { PacientComponent } from './components/psicologo/modules/pacient/pacient.component';
import { MypacientComponent } from './components/psicologo/modules/mypacient/mypacient.component';
import { MypacientCitasComponent } from './components/psicologo/modules/mypacient-citas/mypacient-citas.component';
import { HomeComponent } from './components/psicologo/modules/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './components/psicologo/layout/layout.component';
import { PacientDetailsComponent } from './components/psicologo/modules/pacient-details/pacient-details.component';
import { PacientesAdminComponent } from './components/admin/modules/pacientes-admin/pacientes-admin.component';
import { PsicologosAdminComponent } from './components/admin/modules/psicologos-admin/psicologos-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddPsicologoComponent } from './components/admin/modules/add-psicologo/add-psicologo.component';
import { PacienteDetailsComponent } from './components/admin/modules/paciente-details/paciente-details.component';
import { PsicologoDetailsComponent } from './components/admin/modules/psicologo-details/psicologo-details.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'terminosycondiciones',
    component: TerminosycondicionesComponent,
  },
  {
    path:'cuestionario',
    component: CuestionarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivate: [AuthGuard],
      component: EventsComponent
    }]
  },
  {
    path: 'admin',
    component: DefaultComponent,
    children: [{
        path:'',
        canActivate: [AuthGuard],
        component: PacientesAdminComponent
      }, {
        path:'psicologos',
        canActivate: [AuthGuard],
        component: PsicologosAdminComponent
      }, {
        path:'registrarpsicologo',
        canActivate: [AuthGuard],
        component: AddPsicologoComponent
      }, {
        path: 'paciente/detalles/:id',
        canActivate: [AuthGuard],
        component: PacienteDetailsComponent,
      }, {
        path: 'psicologo/detalles/:id',
        canActivate: [AuthGuard],
        component: PsicologoDetailsComponent
      }]
  },
  {
    path: 'psicologo',
    component: LayoutComponent,
    children: [{
        path:'',
        canActivate: [AuthGuard],
        component: HomeComponent
      }, {
        path:'pacientes',
        canActivate: [AuthGuard],
        component: PacientComponent
      }, {
        path:'paciente-detalles/:id',
        canActivate: [AuthGuard],
        component: PacientDetailsComponent
      }, {
        path:'mispacientes',
        canActivate: [AuthGuard],
        component: MypacientComponent
      }, {
        path: 'mispacientes/citas/:id',
        canActivate: [AuthGuard],
        component: MypacientCitasComponent,
      }]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
