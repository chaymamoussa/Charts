import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';
import { toLineChartData } from 'src/app/utilities/chart-utils';

@Component({
  selector: 'ds-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {
  public pieChartData!: Data;

  constructor(private readonly appService:AppService) { }

  ngOnInit(): void {this.appService.getChartData().subscribe((data: Data) => {
    this.pieChartData = toLineChartData(data);
  })};

}
