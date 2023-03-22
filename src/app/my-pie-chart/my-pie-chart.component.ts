import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import {  ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'ds-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = ['Sales 01','Sales 02','Sales 03','Sales 04'];
  public pieChartData: ChartDataset[] = [
    {
      data: [120, 130, 180, 70],
      label: '',
    },
  ];
  public pieChartType : ChartType= 'pie';
  constructor() { }

  ngOnInit(): void {
  }

}
