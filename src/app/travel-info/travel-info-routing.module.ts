import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelInfoComponent } from './travel-info.component';

const routes: Routes = [
  { path: '', component: TravelInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelInfoRoutingModule { }
