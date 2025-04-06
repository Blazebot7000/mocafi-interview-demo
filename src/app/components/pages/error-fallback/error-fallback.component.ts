import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-fallback',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './error-fallback.component.html',
})
export class ErrorFallbackComponent {
  constructor(private router: Router) { }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
