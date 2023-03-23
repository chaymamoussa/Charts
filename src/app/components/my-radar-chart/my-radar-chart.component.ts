import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';
import { toLineChartData } from 'src/app/utilities/chart-utils';

@Component({
  selector: 'ds-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {
  public radarChartData!: Data;
  constructor(private readonly appService:AppService) { }

  ngOnInit(): void { this.appService.getChartData().subscribe((data: Data) => {
    this.radarChartData = toLineChartData(data);
  });
  }

}
