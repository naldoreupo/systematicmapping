import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PapersComponent } from './components/papers/papers.component';
import { PicoComponent } from './components/pico/pico.component';


const routes: Routes = [  
  { path: '', component:PapersComponent } ,
  { path: 'SearchString', component: PicoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
