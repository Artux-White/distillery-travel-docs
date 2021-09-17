import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelInfoComponent } from './travel-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { travelInfoReducer } from './state/travel-info.reducer';
import { TravelInfoEffects } from './state/travel-info.effects';
import { TravelInfoListModule } from '../travel-info-list/travel-info-list.module';
import { TravelInfoRoutingModule } from './travel-info-routing.module';

@NgModule({
  declarations: [TravelInfoComponent],
  imports: [
    CommonModule,
    TravelInfoRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    StoreModule.forFeature('travelInfoFeature', travelInfoReducer),
    EffectsModule.forFeature([TravelInfoEffects]),
    TravelInfoListModule
  ],
  exports: [TravelInfoComponent]
})
export class TravelInfoModule { }
