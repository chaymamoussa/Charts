import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, of } from 'rxjs';
import { Data } from './models/data';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public get(): Promise<Data> {
    return firstValueFrom(this.fakeApi());
  }

  private fakeApi(): Observable<Data> {
    return of({
      x: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      y: [
        {
          label: 'Example 1',
          items: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Example 2',
          items: [49, 59, 45, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          items: [49, 59, 43, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          items: [49, 59, 55, 73, 56, 55, 20],
        },
        {
          label: 'Example 2',
          items: [49, 59, 45, 73, 56, 55, 30],
        },
      ],
    });
  }
}
