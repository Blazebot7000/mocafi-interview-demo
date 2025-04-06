import { Component } from '@angular/core';
import { UserFormComponent } from '../../shared/user-form/user-form.component';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/user-profile/user-profile.selectors';
import { createUser } from '../../../store/users/users.actions';
import { User } from '../../../store/users/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  imports: [
    MatCardModule,
    UserFormComponent
  ],
  templateUrl: './register-user.component.html',
})
export class RegisterUserComponent {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  onUserSubmit(user: User): void {
    this.store.dispatch(createUser({ user }));
    this.router.navigate(['/users']);
  }
}
