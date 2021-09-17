import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';

export const Material = [

]

export const PrimeNG = [
  TableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Material,
    ...PrimeNG
  ],
  exports:[
    ...Material,
    ...PrimeNG
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class NgSharedModule { }
