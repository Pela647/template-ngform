import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvformComponent } from './svform/svform.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SvformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
