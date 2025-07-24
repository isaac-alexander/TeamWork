import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-create-account',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-create-account.html',
  styleUrl: './admin-create-account.css'
})
export class AdminCreateAccount {
  employee = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    job_role: '',
    department: '',
    address: ''
  };

  constructor(private router: Router) { }

  createAccount() {
    console.log('New Employee Account:', this.employee);
    this.router.navigate(['/signin']);

  }
}