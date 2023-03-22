import { Component, OnInit } from '@angular/core';
import {  ChartType } from 'chart.js';

@Component({
  selector: 'ds-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.scss']
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['sales 1','sales 2'];
  public doughnutChartType : ChartType= 'doughnut';
  public doughnutChartData =[
    { data: [41, 59], label: 'Label 1' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
