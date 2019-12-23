import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputUpperFormatDirective } from './directives/input-upper-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    InputUpperFormatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
