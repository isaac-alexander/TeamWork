import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogOut } from "../log-out/log-out";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, LogOut],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isAdmin = false;

  ngOnInit() {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    this.isAdmin = userObject.jobRole.toLowerCase() === 'admin';

  }

}
