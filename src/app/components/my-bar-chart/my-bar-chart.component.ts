import { Component, OnInit} from '@angular/core';
import {  Data, chartData } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';
import { toLineChartData } from 'src/app/utilities/chart-utils';
import { Observable } from 'rxjs';
@Component({
  selector: 'ds-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartData!: Observable<Data>;

  constructor(private readonly appService:AppService) {


   }

  ngOnInit(): void {
    this.barChartData = this.appService.getChartData();}


}
