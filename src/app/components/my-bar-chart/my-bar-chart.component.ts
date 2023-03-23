import { Component, OnInit } from '@angular/core';
import {  Data } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'ds-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartData!: Data;

  constructor(private readonly appService:AppService) {

   }

  ngOnInit(): void {
    this.appService.getChartData().subscribe((data: Data) => {
      this.barChartData = data;
    });}

}
