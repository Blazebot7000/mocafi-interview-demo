import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { ManageUsersComponent } from './components/pages/manage-users/manage-users.component';
import { EditUserComponent } from './components/pages/edit-user/edit-user.component';
import { RegisterUserComponent } from './components/pages/register-user/register-user.component';
import { ErrorFallbackComponent } from './components/pages/error-fallback/error-fallback.component';
import { LayoutComponent } from './components/pages/layout/layout.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: '', component: LayoutComponent, children: [
            {
                path: 'users', component: ManageUsersComponent
            },
            {
                path: 'user/:id', component: EditUserComponent
            },
            {
                path: 'register', component: RegisterUserComponent
            },
        ]
    },
    {
        path: '**', component: ErrorFallbackComponent
    }
];