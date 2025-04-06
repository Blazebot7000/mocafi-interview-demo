import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../store/user-profile/user-profile.selectors';
import { getUsers, deleteUser } from '../../../store/users/users.actions';
import { User } from '../../../store/users/users.model';
import { selectAllUsers } from '../../../store/users/users.selectors';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './manage-users.component.html',
  styles: []
})
export class ManageUsersComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'status', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  isLoading = true;
  private subscriptions: Subscription[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.store.dispatch(getUsers());

    this.subscriptions.push(
      this.store.select(selectAllUsers).subscribe(users => {
        this.dataSource.data = users;
        if (users.length > 0) {
          this.isLoading = false;
        }
      })
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  navigateToUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

  deleteUser(id: number): void {
    this.store.dispatch(deleteUser({ id }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription?.unsubscribe());
  }
}
