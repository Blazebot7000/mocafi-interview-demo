import { createSelector } from '@ngrx/store';
import { UserProfile } from './user-profile.model';
import { UsersState } from '../users/users.selectors';

export interface UserProfileState {
  currentUserProfile: UserProfile | null;
}

export interface AppState {
  userProfile: UserProfileState;
  users: UsersState;
}

export const selectUserProfileState = (state: AppState) => state.userProfile;

export const isLoggedIn = createSelector(
  selectUserProfileState,
  (userProfileState: UserProfileState) => userProfileState.currentUserProfile !== null
);

export const selectCurrentUserProfile = createSelector(
  selectUserProfileState,
  (userProfileState: UserProfileState) => userProfileState.currentUserProfile
); 