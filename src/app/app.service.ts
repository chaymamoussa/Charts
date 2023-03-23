import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, of } from 'rxjs';
import { Data } from './models/chart.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = "http://localhost:8000/data";
  constructor(private http: HttpClient) {}

  public getChartData(): Observable<Data> {
    return this.http.get<Data>(this.apiUrl).pipe(
      map(response => { console.log(response)
        return {
          labels: response.labels,
          datasets: response.datasets,
        };
      })
    );;
  }
}
