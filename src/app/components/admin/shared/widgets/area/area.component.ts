import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-widgetarea',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  single: any[];
  view: any[] = [700, 400];
  lic: any[] = [];
  sistemas

  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;
  constructor(private datos: DataService) {


    this.cargandoCarreras()
    Object.assign(this, {single} );
  }

  async cargandoCarreras() {
    await this.datos.getSistemas()
    .subscribe(resp=> {
      this.lic.push(resp)
      this.datos.getArtes()
      .subscribe(resp=> {
        this.lic.push(resp)
        this.datos.getGestion()
        .subscribe(resp=> {
          this.lic.push(resp)
          this.datos.getMecanica()
          .subscribe(resp=> {
            this.lic.push(resp)
            this.datos.getElectrica()
            .subscribe(resp=> {
              this.lic.push(resp)
              this.datos.getElectronica()
              .subscribe(resp=> {
                this.lic.push(resp)
              })
            })
          })
        })
      })
    })
    // await this.datos.getArtes()
    // .subscribe(resp=> {
    //   this.lic.push(resp)
    // })
    // await this.datos.getGestion()
    // .subscribe(resp=> {
    //   this.lic.push(resp)
    // })
    // await this.datos.getMecanica()
    // .subscribe(resp=> {
    //   this.lic.push(resp)
    // })
    // await this.datos.getElectrica()
    // .subscribe(resp=> {
    //   this.lic.push(resp)
    // })
    // await this.datos.getElectronica()
    // .subscribe(resp=> {
    //   this.lic.push(resp)
    // })
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Alumnos por carrera'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' alumnos'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  onSelect(event) {
    console.log(event);
  }
}
