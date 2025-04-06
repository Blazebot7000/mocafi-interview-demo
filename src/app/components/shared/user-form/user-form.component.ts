import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../store/users/users.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() formSubmit = new EventEmitter<User>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: [true]
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        gender: this.user.gender,
        status: this.user.status === 'active'
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      const user: User = {
        id: this.user?.id || null,
        name: formValue.name,
        email: formValue.email,
        gender: formValue.gender,
        status: formValue.status ? 'active' : 'inactive'
      };
      this.formSubmit.emit(user);
    }
  }

  getErrorMessage(field: string): string {
    if (this.userForm.get(field)?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (this.userForm.get(field)?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (this.userForm.get(field)?.hasError('maxlength')) {
      return 'Names cannot be longer than 30 characters';
    }
    return '';
  }
} 