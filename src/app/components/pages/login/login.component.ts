import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCurrentUserProfile } from '../../../store/user-profile/user-profile.actions';
import { Subscription } from 'rxjs';
import { isLoggedIn, AppState } from '../../../store/user-profile/user-profile.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';
  invalidCredentials: string = '';
  formSubmitted: boolean = false;

  private userProfileSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // Check if user is already logged in, redirect to users page if they are
    this.userProfileSubscription = this.store.select(isLoggedIn)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/users']);
        }
      });
  }

  ngOnDestroy(): void {
    this.userProfileSubscription?.unsubscribe();
  }

  validateForm(): boolean {
    let isValid = true;
    this.emailError = '';
    this.passwordError = '';
    this.invalidCredentials = '';

    if (!this.email) {
      this.emailError = 'Email is required';
      isValid = false;
    }

    if (!this.password) {
      this.passwordError = 'Password is required';
      isValid = false;
    }

    if (this.email.trim() !== 'demo@mocafi.com' || this.password !== 'MoCaFiRock$') {
      this.invalidCredentials = 'Invalid user credentials';
      isValid = false;
    }

    return isValid;
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.validateForm()) {
      this.store.dispatch(setCurrentUserProfile({
        email: this.email,
        password: this.password
      }));

      this.router.navigate(['/users']);
    }
  }
}
