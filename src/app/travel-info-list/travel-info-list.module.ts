import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelInfoListRoutingModule } from './travel-info-list-routing.module';
import { TravelInfoListComponent } from './travel-info-list.component';
import { NgSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TravelInfoListComponent
  ],
  imports: [
    CommonModule,
    NgSharedModule,
    TravelInfoListRoutingModule
  ],
  exports: [TravelInfoListComponent]
})
export class TravelInfoListModule { }
