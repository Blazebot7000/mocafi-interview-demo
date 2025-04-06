import { createReducer, on } from "@ngrx/store";
import { User } from "./users.model";
import { UsersState } from "./users.selectors";
import { getUsersSuccess, createUserSuccess, deleteUserSuccess, updateUserSuccess } from "./users.actions";

export const initialState: UsersState = {
  users: []
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    users
  })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? user : u))
  })),
  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter((u) => u.id !== id)
  }))
);
