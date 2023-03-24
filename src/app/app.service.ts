import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data } from './models/chart.model';
import { map } from 'rxjs/operators';
import { ChartDataDto } from './utilities/chart-data-dto';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = "http://localhost:8000/data";
  private readonly chartDataDto: ChartDataDto;


  constructor(private http: HttpClient) {
    this.chartDataDto = new ChartDataDto();
    }

  public getChartData(): Observable<Data> {

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
      })
    );
  }
}
