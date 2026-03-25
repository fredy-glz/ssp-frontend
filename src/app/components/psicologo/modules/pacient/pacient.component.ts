import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {
  displayedColumns: string[] = ['nua', 'nombre', 'primerApellido', 'segundoApellido', 'acciones'];
  dataSource;
  pacientes;
  public longitud = 0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.getPacientes()
  }

  async getPacientes() {
    this.data.getPacientes()
      .subscribe(resp => {
        console.log(resp)
        this.pacientes = resp
        this.longitud = this.pacientes.length
        this.dataSource = new MatTableDataSource(this.pacientes);
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

