import { Component, OnInit } from '@angular/core';
import {  ChartType } from 'chart.js';

@Component({
  selector: 'ds-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {
  public radarChartLabels = ['01','02','03','04'];
  public radarChartData = [{data:[120,130,180,70], label: '2017'},
  {data: [90,150,200,45], label: '2018'}];
  public radarChartType : ChartType= 'radar';
  constructor() { }

  ngOnInit(): void {
  }

}
