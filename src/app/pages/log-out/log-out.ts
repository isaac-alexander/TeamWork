import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.html',
  styleUrl: './log-out.css'
})
export class LogOut {
  constructor(private router: Router) { }

  logOut() {
    localStorage.clear();

    this.router.navigate(['/signin'])
  }

}
