import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarBootstrapComponent } from './toolbar/toolbar-bootstrap/toolbar-bootstrap.component';
import { SliderComponent } from './slider/slider/slider.component';
import { ContentBodyComponent } from './content-body/content-body/content-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarBootstrapComponent,
    SliderComponent,
    ContentBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
