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
  selector: 'app-psicologos-admin',
  templateUrl: './psicologos-admin.component.html',
  styleUrls: ['./psicologos-admin.component.css']
})
export class PsicologosAdminComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['nombre', 'primerApellido', 'segundoApellido', 'acciones'];
  dataSource;
  public longitud = 0;
  public psicologos;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dashboardService: DashboardService, private data: DataService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.getPsicologos()
  }

  async getPsicologos() {
    this.data.getPsicologos()
      .subscribe(resp => {
        this.psicologos = resp
        this.longitud = this.psicologos.length
        this.dataSource = new MatTableDataSource(this.psicologos);
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
