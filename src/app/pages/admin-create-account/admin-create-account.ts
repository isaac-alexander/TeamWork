import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CreateUserService } from '../../services/create-user.service';
import { CreateUser } from '../../CreateUser';

@Component({
  selector: 'app-admin-create-account',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-create-account.html',
  styleUrl: './admin-create-account.css'
})
export class AdminCreateAccount {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  job_role: string = '';
  department: string = '';
  address: string = '';
  error = '';
  success = '';

  constructor(private router: Router, private CreateUserService: CreateUserService) { }

  createUser() {
    // if (!this.firstname || !this.lastname || this.email || !this.password || !this.gender || !this.job_role || !this.department || !this.address) {
    //   alert('All fields are required.');
    //   return;
    // }

    this.error = '';
    this.success = '';

    const newUser: CreateUser = { firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password, gender: this.gender, job_role: this.job_role, department: this.department, address: this.address };

    this.CreateUserService.createUser(newUser).subscribe({
      next: (res) => {
        this.success = 'User Created';

        //clear form
      },
      error: (err) => {
        this.error = 'Unable to create user';
      }
    },)
  }
}
