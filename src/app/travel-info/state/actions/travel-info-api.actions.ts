import { TravelInfo } from '../../models/travel-info.model'

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadTravelInfoSuccess = createAction(
  '[Travel Info API] Load Success',
  props<{ travelInfoDocs: TravelInfo[] }>()
);

export const loadTravelInfoFailure = createAction(
  '[Travel Info API] Load Fail',
  props<{ error: string }>()
);


export const saveMyProfileSuccess = createAction(
  '[Travel Info API] Save Profile Success',
  props<{ travelInfo: TravelInfo }>()
);

export const saveMyProfileFailure = createAction(
  '[Travel Info API] Save Profile Fail',
  props<{ error: string }>()
);
