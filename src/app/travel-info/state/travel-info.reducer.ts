import { TravelInfo } from '../models/travel-info.model';

/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { TravelInfoPageActions, TravelInfoApiActions } from './actions';

// State for this feature (export Interface)
export interface TravelInfoState {
  travelInfoDocs: TravelInfo[];
  currentUserUid: string | null;
  error: string;
}

// Initial State (const)
const initialState: TravelInfoState = {
  travelInfoDocs: [],
  currentUserUid: null,
  error: ''
};

export const travelInfoReducer = createReducer<TravelInfoState>(
  initialState,
  on(TravelInfoApiActions.loadTravelInfoSuccess, (state, action): TravelInfoState => {
    return {
      ...state,
      travelInfoDocs: action.travelInfoDocs,
      error: ''
    };
  }),
  on(TravelInfoApiActions.loadTravelInfoFailure, (state, action): TravelInfoState => {
    return {
      ...state,
      travelInfoDocs: [],
      error: action.error
    };
  }),
  on(TravelInfoPageActions.setCurrentUserId, (state, action): TravelInfoState => {
    return {
      ...state,
      currentUserUid: action.currentUserUid,
    };
  }),
  on(TravelInfoApiActions.saveMyProfileSuccess, (state, action): TravelInfoState => {
    const updatedDocs = state.travelInfoDocs.map(
      item => action.travelInfo.id === item.id ? action.travelInfo : item);
    return {
      ...state,
      travelInfoDocs: updatedDocs,
      error: ''
    };
  }),
  on(TravelInfoApiActions.saveMyProfileFailure, (state, action): TravelInfoState => {
    return {
      ...state,
      error: action.error
    };
  }),

);
