import { createReducer, on } from '@ngrx/store';
import { setCurrentUserProfile, clearCurrentUserProfile } from './user-profile.actions';
import { UserProfileState } from './user-profile.selectors';

export const initialState: UserProfileState = {
  currentUserProfile: null
};

export const userProfileReducer = createReducer(
  initialState,
  on(setCurrentUserProfile, (state, userProfile) => ({
    ...state,
    currentUserProfile: userProfile
  })),
  on(clearCurrentUserProfile, (state) => ({
    ...state,
    currentUserProfile: null
  }))
);
