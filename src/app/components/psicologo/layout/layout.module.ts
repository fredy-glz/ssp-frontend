import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PacientComponent } from '../modules/pacient/pacient.component';
import { RouterModule } from '@angular/router';
import { MypacientComponent } from '../modules/mypacient/mypacient.component';
import { HomeComponent } from '../modules/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    LayoutComponent,
    PacientComponent,
    MypacientComponent,
    HomeComponent
  ],
  imports: [
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
    MatSortModule,
    BrowserModule
  ],
  providers: [
    PacientComponent,
    MypacientComponent
  ]
})
export class LayoutModule { }
