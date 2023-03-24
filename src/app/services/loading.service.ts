import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading$ = new BehaviorSubject<boolean>(false);

  public startLoading(): void {
    this.loading$.next(true);
  }

  public stopLoading(): void {
    this.loading$.next(false);
  }

  public isLoading(): Observable<boolean> {
    return this.loading$.asObservable().pipe(map((loading: boolean) => !loading));
  }
}
