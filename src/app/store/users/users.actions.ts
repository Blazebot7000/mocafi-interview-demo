import { createAction, props } from '@ngrx/store';
import { User } from './users.model';

// Get Users Actions
export const getUsers = createAction('[Users] Get Users');
export const getUsersSuccess = createAction('[Users] Get Users Success', props<{ users: User[] }>());
export const getUsersFailure = createAction('[Users] Get Users Failure', props<{ error: string }>());

// Create User Actions
export const createUser = createAction('[Users] Create User', props<{ user: User }>());
export const createUserSuccess = createAction('[Users] Create User Success', props<{ user: User }>());
export const createUserFailure = createAction('[Users] Create User Failure', props<{ error: string }>());

// Update User Actions
export const updateUser = createAction('[Users] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[Users] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[Users] Update User Failure', props<{ error: string }>());

// Delete User Actions
export const deleteUser = createAction('[Users] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[Users] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[Users] Delete User Failure', props<{ error: string }>());
