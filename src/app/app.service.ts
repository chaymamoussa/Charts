import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { Data } from './models/chart.model';
import { ChartDataDto } from './utilities/chart-data-dto';
import { LoadingService } from './services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = "http://localhost:8000/data";
  private readonly chartDataDto: ChartDataDto;

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this.chartDataDto = new ChartDataDto();
  }

  public getChartData(): Observable<Data> {
    this.loadingService.startLoading();
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        const transformedData = this.chartDataDto.transform(data);
        return {
          labels: transformedData.labels,
          datasets: transformedData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data.map(value => Number(value))
          }))
        };
      }),
      finalize(() => {
        this.loadingService.stopLoading();
        })
        );
        }
        }
