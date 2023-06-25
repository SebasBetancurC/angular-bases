import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MagoComponent } from './mago/mago.component';
import { ListComponent } from './list/list.component';





@NgModule({
  declarations: [
    ListComponent,
    MagoComponent
  ],
  exports: [
    ListComponent,
    MagoComponent

  ],

  imports:[
    CommonModule
  ]
})
export class MagosModule { }
