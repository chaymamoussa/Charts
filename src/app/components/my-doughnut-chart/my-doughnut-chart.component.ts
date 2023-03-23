import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'ds-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.scss']
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartData!: Data;
  constructor(private readonly appService:AppService) { }

  ngOnInit(): void {this.appService.getChartData().subscribe((data: Data) => {
    this.doughnutChartData = data;
  })};
}


