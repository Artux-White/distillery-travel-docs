import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelInfoListComponent } from './travel-info-list.component';

const routes: Routes = [
  { path: '', component: TravelInfoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelInfoListRoutingModule { }
