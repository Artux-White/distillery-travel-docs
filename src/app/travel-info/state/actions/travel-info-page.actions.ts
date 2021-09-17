import { TravelInfo } from '../../models/travel-info.model'

/* NgRx */
import { createAction, props } from '@ngrx/store';


export const loadTravelInfoDocs = createAction(
  '[Travel Info List Page] Load'
);

export const setCurrentUserId = createAction(
  '[Travel Info List Page] Set UID',
  props<{ currentUserUid: string | null }>()
);

export const saveMyProfile = createAction(
  '[Travel Info List Page] Save Profile',
  props<{ travelInfo: TravelInfo }>()
);

