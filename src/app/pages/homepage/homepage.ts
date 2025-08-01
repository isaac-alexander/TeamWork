import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';


@Component({
  selector: 'app-homepage',
  imports: [CommonModule, Header],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {
  // boolean... true if role stored is ADMIN
  isAdmin = false;
  fullName: string = '';


  ngOnInit() {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    this.fullName = userObject.fullName || 'User'; // when fullname is not there use User

    this.isAdmin = userObject.jobRole.toLowerCase() === 'admin';
  }

}
