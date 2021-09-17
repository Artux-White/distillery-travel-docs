import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { TravelInfoState } from './travel-info.reducer';

// Extends the app state to include the travel info feature.
// This is required because travel info docs are lazy loaded.
// So the reference to TreavelInfoState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  travelInfo: TravelInfoState;
}

// Selector functions
const getTravelInfoFeatureState = createFeatureSelector<TravelInfoState>('travelInfoFeature');

export const getAllTravelDocs = createSelector(
  getTravelInfoFeatureState,
  state => state.travelInfoDocs
);

export const getError = createSelector(
  getTravelInfoFeatureState,
  state => state.error
);

export const getCurrentUid = createSelector(
  getTravelInfoFeatureState,
  state => state.currentUserUid
);


export const getMyProfile = createSelector(
  getTravelInfoFeatureState,
  getCurrentUid,
  (state, getCurrentUid) => state.travelInfoDocs.find(doc => doc.id == getCurrentUid )
);
