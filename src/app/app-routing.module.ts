import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './components/my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './components/my-radar-chart/my-radar-chart.component';


const routes : Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
