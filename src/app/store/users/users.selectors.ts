import { createSelector } from '@ngrx/store';
import { User } from './users.model';
import { AppState } from '../user-profile/user-profile.selectors';

export interface UsersState {
  users: User[];
}

export const selectUsersState = (state: AppState) => state.users;

export const selectAllUsers = createSelector(
  selectUsersState,
  (usersState: UsersState) => usersState.users
);

export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  (users: User[]) => users.find((user) => user.id === id)
); 
