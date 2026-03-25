import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardService } from '../../modules/dashboard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddPsicologoComponent } from '../../modules/add-psicologo/add-psicologo.component';
import { DefaultComponent } from './default.component';
import { PacienteDetailsComponent } from "../../modules/paciente-details/paciente-details.component";
import { PacientesAdminComponent } from '../../modules/pacientes-admin/pacientes-admin.component';
import { PsicologoDetailsComponent } from "../../modules/psicologo-details/psicologo-details.component";
import { PsicologosAdminComponent } from '../../modules/psicologos-admin/psicologos-admin.component';


@NgModule({
  declarations: [
    PsicologoDetailsComponent,
    PacienteDetailsComponent,
    AddPsicologoComponent,
    DefaultComponent,
    PacientesAdminComponent,
    PsicologosAdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
