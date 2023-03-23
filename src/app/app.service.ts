import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, of } from 'rxjs';
import { Data } from './models/chart.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly url = '/api/chart';
  constructor(private http: HttpClient) {}

  public getChartData(): Observable<Data> {
    const data: Data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Expenses',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    return of(data);
  }

  /*public get(): Promise<Data> {
    return firstValueFrom(this.fakeApi());
  }

  private fakeApi(): Observable<Data> {
    return of({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Example 1',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Example 2',
          data: [49, 59, 45, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          data: [49, 59, 43, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          data: [49, 59, 55, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          data: [49, 59, 45, 73, 56, 55, 30],
        },
      ],
    });
  }*/
}
