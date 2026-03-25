// Angular
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule as CM } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DdrBlockListModule } from 'ddr-block-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// Servicios
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { DdrConfigurationService } from 'ddr-configuration';

// Componentes
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderComponent } from './components/schedule/header/header.component';
import { EventsComponent } from './components/schedule/content/events/events.component';
import { ContentComponent } from './components/schedule/content/content.component';
import { DefaultModule } from './components/admin/layouts/default/default.module';
import { LayoutModule } from './components/psicologo/layout/layout.module';
import { PsicologoComponent } from './components/psicologo/psicologo.component';
import { PacientDetailsComponent } from './components/psicologo/modules/pacient-details/pacient-details.component';

import { httpInterceptorProviders } from './services/auth-interceptor';
import { MypacientCitasComponent } from './components/psicologo/modules/mypacient-citas/mypacient-citas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('./assets/locale/locale.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ScheduleComponent,
    HeaderComponent,
    EventsComponent,
    ContentComponent,
    AdminComponent,
    PsicologoComponent,
    PacientDetailsComponent,
    MypacientCitasComponent,
    ProfileComponent,
    CuestionarioComponent,
    TerminosycondicionesComponent,
  ],
  imports: [
    CM,
    NgxChartsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DefaultModule,
    LayoutModule,
    CheckboxModule,
    DdrBlockListModule,
    FlexLayoutModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [RestApiService,
              DataService,
              httpInterceptorProviders,
              DdrConfigurationService,
              {
                provide: APP_INITIALIZER,
                useFactory: configFactory,
                deps: [DdrConfigurationService],
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
