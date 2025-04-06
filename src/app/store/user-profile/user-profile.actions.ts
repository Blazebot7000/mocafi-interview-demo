import { createAction, props } from '@ngrx/store';
import { UserProfile } from './user-profile.model';

export const setCurrentUserProfile = createAction('[Login Component] Set Current User Profile', props<UserProfile>());
export const clearCurrentUserProfile = createAction('[Login Component] Clear Current User Profile');
