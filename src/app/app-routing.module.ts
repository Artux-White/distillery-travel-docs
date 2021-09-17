import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: 'travel-info-list',
        loadChildren: () => import('./travel-info-list/travel-info-list.module').then((m) => m.TravelInfoListModule)},
      {
        path: 'travel-info',
        loadChildren: () => import('./travel-info/travel-info.module').then((m) => m.TravelInfoModule)},
      { path: '', redirectTo: 'travel-info-list', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
