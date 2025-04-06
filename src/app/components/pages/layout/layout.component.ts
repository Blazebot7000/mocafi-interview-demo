import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { clearCurrentUserProfile } from '../../../store/user-profile/user-profile.actions';
import { Subscription } from 'rxjs';
import { AppState, selectCurrentUserProfile } from '../../../store/user-profile/user-profile.selectors';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  userEmail: string = '';
  private userProfileSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userProfileSubscription = this.store.select(selectCurrentUserProfile)
      .subscribe(userProfile => {
        if (userProfile) {
          this.userEmail = userProfile.email;
        } else {
          // If no user profile, redirect to login
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnDestroy(): void {
    this.userProfileSubscription?.unsubscribe();
  }

  logout(): void {
    this.store.dispatch(clearCurrentUserProfile());
    this.router.navigate(['/login']);
  }
}
