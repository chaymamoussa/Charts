import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { ExampleComponent } from './components/example/example.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';


@NgModule({
  declarations: [AppComponent, ExampleComponent, MyComponentComponent, MyBarChartComponent, MyDoughnutChartComponent, MyPieChartComponent, MyRadarChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
