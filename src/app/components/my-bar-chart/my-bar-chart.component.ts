import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/chart.model';
import { AppService } from 'src/app/app.service';
import { toLineChartData } from 'src/app/utilities/chart-utils';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'ds-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartData!: Observable<Data>;

  constructor(private readonly appService: AppService, public readonly loadingService: LoadingService) { }

  ngOnInit(): void {
    this.barChartData = this.appService.getChartData();
  }

  public isLoading(): Observable<boolean> {
    return this.loadingService.isLoading();
  }

}
