import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './components/my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './components/my-radar-chart/my-radar-chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppComponent, MyBarChartComponent, MyDoughnutChartComponent, MyPieChartComponent, MyRadarChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule, MatProgressSpinnerModule,MatIconModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
