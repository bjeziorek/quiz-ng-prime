import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { QuestionsComponent } from "./questions/questions.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    QuestionsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
