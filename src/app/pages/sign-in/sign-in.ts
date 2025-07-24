import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';
import { SignInUser } from '../../SignInUser';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router, private signInService: SignInService) { }

  signIn() {
    if (!this.email || !this.password) {
      alert('Email, password and role are required.');
      return;
    }

    const userData: SignInUser = { email: this.email, password: this.password };

    this.signInService.signIn(userData).subscribe({
      next: (res) => {
        this.error = '';

        localStorage.setItem('jobRole', res.data.jobRole);
        localStorage.setItem('fullName', res.data.fullName);
        localStorage.setItem('token', res.data.token);

        this.router.navigate(['/homepage']);
      },
      error: (err) => {
        this.error = 'invalid email or password';
      }
    },)
  }
}
