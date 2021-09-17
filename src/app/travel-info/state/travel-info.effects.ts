import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TravelInfoService } from '../travel-info.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TravelInfoPageActions, TravelInfoApiActions } from './actions';


@Injectable()
export class TravelInfoEffects {

  constructor(private actions$: Actions, private travelInfoService: TravelInfoService) { }

  loadTravelDocs$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TravelInfoPageActions.loadTravelInfoDocs),
        mergeMap(() => this.travelInfoService.getAllTravelDocs()
          .pipe(
            map(travelInfoDocs => TravelInfoApiActions.loadTravelInfoSuccess({ travelInfoDocs })),
            catchError(error => of(TravelInfoApiActions.loadTravelInfoFailure({ error })))
          )
        )
      );
  });

  saveMyProfile$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TravelInfoPageActions.saveMyProfile),
        concatMap(action => this.travelInfoService.saveMyProfile(action.travelInfo)
          .pipe(
            map(() => TravelInfoApiActions.saveMyProfileSuccess({ travelInfo: action.travelInfo })),
            catchError(error => of(TravelInfoApiActions.saveMyProfileFailure({ error: 'Error Updating Document' })))
            )
          )
      );
  });
}
