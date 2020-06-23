import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }
