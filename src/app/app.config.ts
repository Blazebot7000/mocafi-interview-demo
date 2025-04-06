import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { userProfileReducer } from './store/user-profile/user-profile.reducer';
import { usersReducer } from './store/users/users.reducer';
import { UsersEffects } from './store/users/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      users: usersReducer,
      userProfile: userProfileReducer
    }),
    provideEffects(UsersEffects)
  ]
};
