import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../store/user-profile/user-profile.selectors';
import { User } from '../../../store/users/users.model';
import { selectUserById } from '../../../store/users/users.selectors';
import { updateUser } from '../../../store/users/users.actions';
import { UserFormComponent } from '../../shared/user-form/user-form.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    UserFormComponent
  ],
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit, OnDestroy {
  userId: number | null = null;
  user: User | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.userId = params['id'] ? Number(params['id']) : null;
        if (this.userId) {
          this.subscriptions.push(
            this.store.select(selectUserById(this.userId)).subscribe(user => {
              this.user = user || null;
            })
          );
        }
      })
    );
  }

  onUserSubmit(user: User): void {
    this.store.dispatch(updateUser({ user }));
    this.router.navigate(['/users']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription?.unsubscribe());
  }
}
