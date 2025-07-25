import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {
  // boolean... true if role stored is ADMIN
  isAdmin = false
  fullName: string = '';


  ngOnInit() {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    this.fullName = userObject.fullName || 'User'; // when fullname is not there use User

    this.isAdmin = userObject.jobRole.toLowerCase() === 'admin';
  }

}
