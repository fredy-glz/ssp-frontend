import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-pacientes-admin',
  templateUrl: './pacientes-admin.component.html',
  styleUrls: ['./pacientes-admin.component.css']
})
export class PacientesAdminComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['nua', 'nombre', 'primerApellido', 'segundoApellido', 'acciones'];
  dataSource;
  public longitud = 0;
  public pacientes;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dashboardService: DashboardService, private data: DataService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.getPacientes()
  }

  async getPacientes() {
    this.data.getPacientesAdmin()
      .subscribe(resp => {
        console.log(resp)
        this.pacientes = resp
        this.longitud = this.pacientes.length
        const p = this.pacientes
        this.dataSource = new MatTableDataSource(p);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
