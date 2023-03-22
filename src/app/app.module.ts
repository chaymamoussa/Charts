import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { ExampleComponent } from './components/example/example.component';
import { MyComponentComponent } from './components/my-component/my-component.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent, MyComponentComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
