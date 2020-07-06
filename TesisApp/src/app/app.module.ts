import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { PicoComponent } from './components/pico/pico.component';
import { PapersComponent } from './components/papers/papers.component';
import { PaperEditComponent } from './components/papers/paper-edit/paper-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      PicoComponent,
      PapersComponent,
      PaperEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      MaterialModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
