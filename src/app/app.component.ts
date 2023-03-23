import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { AppService } from './app.service';
import { Data, chartData } from './models/chart.model';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    /*this.appService.get().then((data: Data) => {
      this.lineChartData = this.toLineChartData(data);
    });*/
  }

  public toLineChartData(data: Data): any {
    return {
      labels: data.labels,
      datasets: data.datasets.map((i) => this.toDataSet(i)),
    };
  }

  public toDataSet(y: chartData): any {
    return {
      data: y.data,
      label: y.label,
      fill: true,
      tension: 0.5,
      borderColor: this.getRandomColor(),
      backgroundColor: this.getRandomColor(),
    };
  }

  public getRandomColor(): string {
    return `rgba(${this.getRandomInt()}, ${this.getRandomInt()}, ${this.getRandomInt()}, 0.5)`;
  }

  public getRandomInt() {
    const min = 0;
    const max = 255;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
