import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicoComponent } from './pico/pico.component';


const routes: Routes = [  
  { path: '', component: PicoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
