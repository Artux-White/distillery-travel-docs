import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TravelInfoData } from './travel-info/travel-info-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MainComponent } from './main/main.component';
import { TravelInfoModule } from './travel-info/travel-info.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UserButtonDialogComponent } from './user-button-dialog/user-button-dialog.component';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth } from '@angular/fire/auth';
// import { getAuth } from '@firebase/auth';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgSharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainComponent,
    UserButtonDialogComponent,
    HeaderComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TravelInfoData),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    TravelInfoModule,
    MatDialogModule,
    NgSharedModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)), // New firebase v7 API - check later....
    // provideAuth(() => getAuth()),
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
