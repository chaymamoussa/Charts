import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2015','2016','2017','2018','2019','2020','2021'];
  public barChartType = 'bar';
  public barCharLegend = true;
   public barChartData = [
    {data: [65,59,86,75,25,95,87], label: 'Series A'},
    {data: [28,36,41,29,28,54,87], label: 'Series B'}
   ];

  constructor() {
    console.log("component bar chart");
   }

  ngOnInit(): void {
    console.log("component bar chart");
  }

}
