import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabComponent } from './lab.component';



@NgModule({
  declarations: [
    LabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LabComponent]
})
export class LabModule { }
