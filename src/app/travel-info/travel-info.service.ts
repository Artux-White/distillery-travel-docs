import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';
import { tap, catchError, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { TravelInfo } from './models/travel-info.model';

export interface Activity {
  user: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TravelInfoService {
  private travelInfoUrl = 'api/travelInfo';
  lastestUpdates = new Subject<Activity>();
  constructor(private http: HttpClient, private angularFirestore: AngularFirestore, private authService: AuthService) { }

  /**
   * Use http inMemory
   */
  // getAllTravelDocs(): Observable<TravelInfo[]> {
  //   return this.http.get<TravelInfo[]>(this.travelInfoUrl)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  getAllTravelDocs(): Observable<TravelInfo[]> {
    return this.angularFirestore.collection<TravelInfo>('travelInfo').valueChanges({ idField: 'id' })
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }

  getMyProfile(){
    const user = this.authService.user.getValue();
    return this.angularFirestore.doc<TravelInfo>(`travelInfo/${user?.uid}`).valueChanges().pipe(take(1));
  }

  saveMyProfile(profile: TravelInfo){
    const user = this.authService.user.getValue();
    const subjectUpdate: Activity = {
      user: profile.name,
      date: new Date()
    }
    this.lastestUpdates.next(subjectUpdate);
    return of(this.angularFirestore.doc<TravelInfo>(`travelInfo/${user?.uid}`).set(profile));
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
