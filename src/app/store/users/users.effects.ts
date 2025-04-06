// create an effect to get the users from gorest.co.in/public/v2/users

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  createUser,
  createUserSuccess,
  createUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from './users.actions';
import { User } from './users.model';
import { of } from 'rxjs';

const ACCESS_TOKEN = 'd7fbab88089d8fe9c062d411a9320029aec674dffc303e7f05a8056e21680e2f';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    switchMap(() => this.http.get<User[]>(`https://gorest.co.in/public/v2/users?access-token=${ACCESS_TOKEN}`).pipe(
      map((users) => getUsersSuccess({ users })),
      catchError(() =>
        of(getUsersFailure({ error: 'Error fetching users' }))
      )
    ))
  ));

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(createUser),
    mergeMap(({ user }) => this.http.post<User>(`https://gorest.co.in/public/v2/users?access-token=${ACCESS_TOKEN}`, user).pipe(
      tap((user: User) => console.log('User created', user)),
      map((user) => createUserSuccess({ user })),
      catchError(() =>
        of(createUserFailure({ error: 'Error creating user' }))
      )
    ))
  ));

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    mergeMap(({ user }) => this.http.put<User>(`https://gorest.co.in/public/v2/users/${user.id}?access-token=${ACCESS_TOKEN}`, user).pipe(
      map((user) => updateUserSuccess({ user })),
      catchError(() =>
        of(updateUserFailure({ error: 'Error updating user' }))
      )
    ))
  ));

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUser),
    mergeMap(({ id }) => this.http.delete<User>(`https://gorest.co.in/public/v2/users/${id}?access-token=${ACCESS_TOKEN}`).pipe(
      map(() => deleteUserSuccess({ id })),
      catchError(() =>
        of(deleteUserFailure({ error: 'Error deleting user' }))
      )
    ))
  ));
}
