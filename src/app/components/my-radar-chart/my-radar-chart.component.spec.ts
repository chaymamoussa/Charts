import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadarChartComponent } from './my-radar-chart.component';

describe('MyRadarChartComponent', () => {
  let component: MyRadarChartComponent;
  let fixture: ComponentFixture<MyRadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRadarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
