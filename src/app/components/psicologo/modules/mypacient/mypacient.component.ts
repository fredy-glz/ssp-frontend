import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-mypacient',
  templateUrl: './mypacient.component.html',
  styleUrls: ['./mypacient.component.css']
})
export class MypacientComponent implements OnInit {
  displayedColumns: string[] = ['nua', 'nombre', 'primerApellido', 'segundoApellido', 'acciones'];
  dataSource;
  pacientes;
  mispacientes = [];
  public longitud = 0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getMisPacientes()
  }

  async getMisPacientes() {
    this.data.getMisPacientes()
      .subscribe(resp => {
        console.log(resp)
        this.pacientes = resp
        for (let i = 0; i < this.pacientes.length; i++) {
          this.mispacientes.push(this.pacientes[i].Patient)
        }
        this.longitud = this.mispacientes.length
        this.dataSource = new MatTableDataSource(this.mispacientes);
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
